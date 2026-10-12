import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// ── Simple .env loader for local Node execution ───────────────
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx > 0) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}
loadEnv();

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const GOOGLE_BUSINESS_ACCOUNT_ID = process.env.GOOGLE_BUSINESS_ACCOUNT_ID || '101182124871893737802';
const GOOGLE_BUSINESS_LOCATION_ID = process.env.GOOGLE_BUSINESS_LOCATION_ID || '14578009910523945340';

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing Supabase credentials in .env (SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY).");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

/**
 * Automatically fetch a fresh Google Access Token using the permanent Refresh Token
 */
async function getFreshAccessToken() {
  console.log("Refreshing Google OAuth2 Access Token...");
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    refresh_token: GOOGLE_REFRESH_TOKEN,
    grant_type: 'refresh_token'
  });

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to refresh token (${res.status}): ${errorText}`);
  }

  const data = await res.json();
  console.log("Access token successfully refreshed.");
  return data.access_token;
}

/**
 * Validates if a review is eligible to be shown.
 * Criteria: 4 or 5 stars AND has a comment text.
 */
function isReviewEligible(rating, comment) {
  return (rating === 4 || rating === 5) && 
         typeof comment === 'string' && 
         comment.trim().length > 0;
}

/**
 * Fetch ALL reviews from Google Business Profile API by following pagination (nextPageToken)
 */
async function fetchAllGoogleReviews(accessToken) {
  console.log(`Fetching ALL reviews for Location ${GOOGLE_BUSINESS_LOCATION_ID}...`);
  let allReviews = [];
  let pageToken = '';
  let pageCount = 0;

  do {
    pageCount++;
    const url = `https://mybusiness.googleapis.com/v4/accounts/${GOOGLE_BUSINESS_ACCOUNT_ID}/locations/${GOOGLE_BUSINESS_LOCATION_ID}/reviews?pageSize=50${pageToken ? '&pageToken=' + pageToken : ''}`;
    
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    if (data.reviews && data.reviews.length > 0) {
      allReviews = allReviews.concat(data.reviews);
      console.log(`  → Page ${pageCount}: Got ${data.reviews.length} reviews (Total so far: ${allReviews.length})`);
    }

    pageToken = data.nextPageToken || '';
  } while (pageToken);

  return allReviews;
}

/**
 * Synchronize Google Reviews to Supabase
 */
async function syncGoogleReviews() {
  try {
    console.log("Starting Google Reviews sync...");
    
    // 1. Get fresh access token automatically
    const accessToken = await getFreshAccessToken();

    // 2. Fetch ALL reviews across all pages from Google Business Profile
    const googleReviews = await fetchAllGoogleReviews(accessToken);
    console.log(`Fetched ${googleReviews.length} total reviews across all pages from Google.`);

    let inserted = 0;
    let eligibleCount = 0;

    // 3. Process and Upsert to Supabase
    for (const review of googleReviews) {
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
      if (isEligible) eligibleCount++;

      const reviewData = {
        google_review_id: review.reviewId,
        business_location_id: GOOGLE_BUSINESS_LOCATION_ID,
        reviewer_name: review.reviewer?.displayName || 'Verified Client',
        reviewer_photo_url: review.reviewer?.profilePhotoUrl || null,
        rating: ratingInt,
        comment: comment,
        review_date: review.createTime,
        update_time: review.updateTime || review.createTime,
        is_eligible: isEligible,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('google_reviews')
        .upsert(reviewData, { onConflict: 'google_review_id' });

      if (error) {
        console.error(`Error upserting review ${review.reviewId}:`, error.message);
      } else {
        inserted++;
      }
    }
    
    console.log(`✅ Sync complete. Successfully saved ${inserted} of ${googleReviews.length} reviews (${eligibleCount} eligible 4/5-star reviews with text).`);

  } catch (error) {
    console.error("❌ Error during sync:", error.message);
  }
}

syncGoogleReviews();
