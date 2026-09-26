import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Get these from Vite environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface GoogleReview {
  id: string;
  reviewer_name: string;
  reviewer_photo_url: string | null;
  rating: number;
  comment: string;
  review_date: string;
}

interface UseGoogleReviewsResult {
  reviews: GoogleReview[];
  count: number;
  fiveStarCount: number;
  fourStarCount: number;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
}

export function useGoogleReviews(limit = 6): UseGoogleReviewsResult {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [count, setCount] = useState<number>(0);
  const [fiveStarCount, setFiveStarCount] = useState<number>(0);
  const [fourStarCount, setFourStarCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    async function fetchReviewStats() {
      try {
        // Since RLS is enabled and allows ONLY eligible reviews (rating 4/5 + comment)
        // we can just query directly.

        // Get total count
        const { count: totalCount, error: countError } = await supabase
          .from('google_reviews')
          .select('*', { count: 'exact', head: true });
        
        if (countError) throw countError;
        setCount(totalCount || 0);

        // Get 5 star count
        const { count: fiveCount, error: fiveError } = await supabase
          .from('google_reviews')
          .select('*', { count: 'exact', head: true })
          .eq('rating', 5);
        
        if (fiveError) throw fiveError;
        setFiveStarCount(fiveCount || 0);

        // Get 4 star count
        const { count: fourCount, error: fourError } = await supabase
          .from('google_reviews')
          .select('*', { count: 'exact', head: true })
          .eq('rating', 4);
        
        if (fourError) throw fourError;
        setFourStarCount(fourCount || 0);

      } catch (err: any) {
        console.error("Error fetching review stats:", err);
        setError(err.message);
      }
    }
    
    fetchReviewStats();
  }, []);

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      try {
        const from = page * limit;
        const to = from + limit - 1;

        const { data, error: fetchError } = await supabase
          .from('google_reviews')
          .select('id, reviewer_name, reviewer_photo_url, rating, comment, review_date')
          .order('review_date', { ascending: false })
          .range(from, to);

        if (fetchError) throw fetchError;

        if (data) {
          if (page === 0) {
            setReviews(data);
          } else {
            setReviews(prev => [...prev, ...data]);
          }
          
          if (data.length < limit) {
            setHasMore(false);
          }
        }
      } catch (err: any) {
        console.error("Error fetching reviews:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [page, limit]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return { reviews, count, fiveStarCount, fourStarCount, loading, error, hasMore, loadMore };
}
