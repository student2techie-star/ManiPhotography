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
    <section className="google-reviews-section">
      <div className="reviews-header">
        <div className="stars-container">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="star-icon filled" fill="currentColor" />
          ))}
        </div>
        <h2>What Our Customers Say</h2>
        
        {loading && count === 0 ? (
          <p className="reviews-subtitle">Loading reviews...</p>
        ) : (
          <>
            <p className="reviews-count">{count} Google Reviews</p>
            <p className="reviews-subtitle">Real feedback from our customers</p>
            {/* Optional Stats breakdown */}
            <div className="reviews-stats">
              <span title="5-star reviews with comments">{fiveStarCount} ★★★★★</span>
              {fourStarCount > 0 && <span title="4-star reviews with comments"> • {fourStarCount} ★★★★☆</span>}
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
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="google-brand-tag">Google Review</span>
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
