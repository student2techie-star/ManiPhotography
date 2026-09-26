-- Supabase Schema for Google Reviews

-- Create google_reviews table
CREATE TABLE google_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    google_review_id TEXT NOT NULL,
    business_location_id TEXT NOT NULL,
    reviewer_name TEXT NOT NULL,
    reviewer_photo_url TEXT,
    rating INTEGER NOT NULL,
    comment TEXT,
    review_date TIMESTAMPTZ NOT NULL,
    update_time TIMESTAMPTZ,
    google_review_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    is_eligible BOOLEAN NOT NULL DEFAULT false
);

-- Unique constraint on google_review_id
ALTER TABLE google_reviews ADD CONSTRAINT unique_google_review_id UNIQUE (google_review_id);

-- Enable Row Level Security (RLS)
ALTER TABLE google_reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Allow public read access to ELIGIBLE reviews ONLY
CREATE POLICY "Public read access to eligible reviews"
    ON google_reviews
    FOR SELECT
    TO public
    USING (is_eligible = true);

-- RLS Policy: Restrict INSERT, UPDATE, DELETE to service role (backend only)
-- No policies are created for public/anon roles for these operations, so they are denied by default.

-- Recommended Indexes
CREATE INDEX idx_google_reviews_eligible ON google_reviews(is_eligible);
CREATE INDEX idx_google_reviews_date ON google_reviews(review_date DESC);
CREATE INDEX idx_google_reviews_location ON google_reviews(business_location_id);
