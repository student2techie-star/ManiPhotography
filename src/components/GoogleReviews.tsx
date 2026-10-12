import React from 'react';
import { Star, User } from 'lucide-react';
import { useGoogleReviews } from '../hooks/useGoogleReviews';
import './GoogleReviews.css'; // Let's add some basic CSS

export const GoogleReviews: React.FC = () => {
  const { reviews, count, fiveStarCount, fourStarCount, loading, error, hasMore, loadMore } = useGoogleReviews(6);

  if (error) {
    return (
      <div className="google-reviews-section error">
        <p>Failed to load reviews. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="google-reviews-section" id="google-reviews" aria-label="Customer Google Reviews">
      <div className="reviews-header">
        <div className="google-reviews-badge">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span>Verified Google Reviews</span>
        </div>

        <div className="stars-container" aria-label="5 out of 5 stars rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="star-icon filled" fill="currentColor" />
          ))}
        </div>

        <h2>What Our Clients Say</h2>
        
        {loading && count === 0 ? (
          <p className="reviews-subtitle">Loading verified reviews...</p>
        ) : (
          <>
            <div className="reviews-count-rating">
              <span className="reviews-rating-number">4.9 ★</span>
              <span className="reviews-count">100+ Google Reviews ({count} Written Testimonials)</span>
            </div>
            <p className="reviews-subtitle">
              Authentic stories and experiences from families who celebrated their milestone moments with us in Thirukadaiyur.
            </p>
            <div className="reviews-stats">
              <span title="5-star reviews">★★★★★ {fiveStarCount} Five-Star</span>
              {fourStarCount > 0 && <span title="4-star reviews">• ★★★★☆ {fourStarCount} Four-Star</span>}
            </div>
          </>
        )}
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-card-header">
              <div className="reviewer-info">
                {review.reviewer_photo_url ? (
                  <img src={review.reviewer_photo_url} alt={review.reviewer_name} className="reviewer-avatar" />
                ) : (
                  <div className="reviewer-avatar-placeholder">
                    <User size={24} />
                  </div>
                )}
                <div>
                  <h3 className="reviewer-name">{review.reviewer_name}</h3>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`star-icon-small ${i < review.rating ? 'filled' : 'empty'}`}
                        fill={i < review.rating ? 'currentColor' : 'none'}
                        size={16}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="review-content">
              <p>"{review.comment}"</p>
            </div>
            
            <div className="review-card-footer">
              <span className="review-date">
                {new Date(review.review_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
              <span className="google-brand-tag">
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Google Review
              </span>
            </div>
          </div>
        ))}
      </div>

      {loading && reviews.length > 0 && (
         <div className="loading-more">Loading more...</div>
      )}

      {hasMore && !loading && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
      
      {!hasMore && reviews.length > 0 && (
        <p className="no-more-reviews">End of reviews</p>
      )}
    </section>
  );
};
