# Google Business Profile Reviews Integration Setup

This document provides complete instructions for setting up the Google Business Profile Reviews integration with Supabase.

## 1. Supabase Setup Documentation

1. Create a new project on [Supabase](https://supabase.com).
2. Go to **SQL Editor** and run the schema provided in `supabase-schema.sql`.
   - This creates the `google_reviews` table.
   - Sets up the unique constraint on `google_review_id`.
   - Enables Row Level Security (RLS).
   - Creates a policy that only allows public read access to eligible reviews (`is_eligible = true`).
3. Go to **Project Settings > API** and copy your:
   - `Project URL`
   - `anon` `public` key
   - `service_role` key (Keep this secret! Never use in frontend).

## 2. Google Cloud Setup Documentation

1. Go to the [Google Cloud Console](https://console.cloud.google.com).
2. Create a new project or select an existing one.
3. Enable the **Google Business Profile API**.
4. Go to **APIs & Services > Credentials**.
5. Create **OAuth 2.0 Client IDs** (Web Application type).
6. Configure the OAuth Consent Screen.
7. Get your `Client ID` and `Client Secret`.
8. You will need to perform an OAuth flow once to get a **Refresh Token** for the business owner account.
9. Get your `Account ID` and `Location ID` from the Google Business Profile interface or API.

## 3. Environment Variables Documentation

### Frontend Setup

Create a `.env` or `.env.local` file in your Vite project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Backend / Sync Script Setup

The script `scripts/sync-google-reviews.mjs` runs server-side (or on a local machine via cron). It needs these variables in its execution environment:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

GOOGLE_BUSINESS_ACCOUNT_ID=accounts/your-account-id
GOOGLE_BUSINESS_LOCATION_ID=locations/your-location-id
GOOGLE_ACCESS_TOKEN=your-access-token
```
*(Note: For full production, you must implement the OAuth token refresh flow to automatically obtain a new `GOOGLE_ACCESS_TOKEN` using your `GOOGLE_REFRESH_TOKEN` before making API calls.)*

## 4. Production Deployment Documentation

1. **Frontend**: Deploy your Vite application as usual (e.g., Vercel, Netlify, GitHub Pages). Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are added to the platform's environment variables.
2. **Backend Sync**: 
   - Deploy `scripts/sync-google-reviews.mjs` as a recurring cron job. 
   - Options include:
     - **GitHub Actions**: Run on a schedule using cron.
     - **Supabase Edge Functions**: Wrap the script in an edge function and invoke via `pg_cron`.
     - **Vercel Cron / Render Background Worker**.
   - Example Cron configuration (every 30 mins): `*/30 * * * * node scripts/sync-google-reviews.mjs`

## 5. Testing Checklist

Ensure the system behaves exactly as expected:

- [ ] **Test 1**: 5 stars, Comment: "Excellent!" -> SHOW, Count +1
- [ ] **Test 2**: 4 stars, Comment: "Good service" -> SHOW, Count +1
- [ ] **Test 3**: 5 stars, No comment -> HIDE, Count +0
- [ ] **Test 4**: 4 stars, No comment -> HIDE, Count +0
- [ ] **Test 5**: 3 stars, Comment: "Okay service" -> HIDE, Count +0
- [ ] **Test 6**: An existing valid review is edited to 3 stars -> HIDE, Count decreases
- [ ] **Test 7**: An existing valid review has its comment removed -> HIDE, Count decreases
- [ ] **Test 8**: The displayed Count is exactly equal to the total qualifying reviews, regardless of pagination limit.
- [ ] **Security**: Anonymous users cannot INSERT, UPDATE, or DELETE from `google_reviews`.
