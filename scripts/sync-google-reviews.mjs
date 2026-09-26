import { createClient } from '@supabase/supabase-js';

// Environment variables should be configured via .env file or deployment platform
// require('dotenv').config() if running locally and using dotenv package.

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const GOOGLE_BUSINESS_ACCOUNT_ID = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
const GOOGLE_BUSINESS_LOCATION_ID = process.env.GOOGLE_BUSINESS_LOCATION_ID;
// Access token management typically requires a refresh token flow
const GOOGLE_ACCESS_TOKEN = process.env.GOOGLE_ACCESS_TOKEN; 

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing Supabase credentials.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

/**
 * Validates if a review is eligible to be shown.
 * Criteria: 4 or 5 stars AND has a comment.
 */
function isReviewEligible(rating, comment) {
  return (rating === 4 || rating === 5) && 
         typeof comment === 'string' && 
         comment.trim().length > 0;
}

/**
 * Fetch reviews from Google Business Profile API.
 * Note: You will need to implement the actual OAuth2 token refresh logic 
 * in a production environment.
 */
async function fetchGoogleReviews() {
  if (!GOOGLE_BUSINESS_ACCOUNT_ID || !GOOGLE_BUSINESS_LOCATION_ID || !GOOGLE_ACCESS_TOKEN) {
    throw new Error("Missing Google Business credentials.");
  }
  
  const url = `https://mybusiness.googleapis.com/v4/accounts/${GOOGLE_BUSINESS_ACCOUNT_ID}/locations/${GOOGLE_BUSINESS_LOCATION_ID}/reviews`;
  
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GOOGLE_ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Google API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.reviews || [];
}

/**
 * Synchronize Google Reviews to Supabase
 */
async function syncGoogleReviews() {
  try {
    console.log("Starting Google Reviews sync...");
    
    // 1. Fetch reviews from Google
    const googleReviews = await fetchGoogleReviews();
    console.log(`Fetched ${googleReviews.length} reviews from Google.`);

    let inserted = 0;
    let updated = 0;

    // 2. Process and Upsert to Supabase
    for (const review of googleReviews) {
      // Map Google's rating enum (STAR_RATING_UNSPECIFIED, ONE, TWO, THREE, FOUR, FIVE) to integer
      let ratingInt = 0;
      switch (review.starRating) {
        case 'FIVE': ratingInt = 5; break;
        case 'FOUR': ratingInt = 4; break;
        case 'THREE': ratingInt = 3; break;
        case 'TWO': ratingInt = 2; break;
        case 'ONE': ratingInt = 1; break;
      }

      const comment = review.comment ? review.comment.trim() : "";
      const isEligible = isReviewEligible(ratingInt, comment);

      const reviewData = {
        google_review_id: review.reviewId,
        business_location_id: GOOGLE_BUSINESS_LOCATION_ID,
        reviewer_name: review.reviewer.displayName,
        reviewer_photo_url: review.reviewer.profilePhotoUrl || null,
        rating: ratingInt,
        comment: comment,
        review_date: review.createTime,
        update_time: review.updateTime || review.createTime,
        is_eligible: isEligible,
        updated_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('google_reviews')
        .upsert(reviewData, { onConflict: 'google_review_id' });

      if (error) {
        console.error(`Error upserting review ${review.reviewId}:`, error);
      } else {
        inserted++;
      }
    }
    
    console.log(`Sync complete. Processed ${googleReviews.length} reviews.`);

  } catch (error) {
    console.error("Error during sync:", error);
  }
}

// Run the sync
syncGoogleReviews();
