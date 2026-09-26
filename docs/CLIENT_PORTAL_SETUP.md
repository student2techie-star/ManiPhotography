# Client Photo Access Portal Setup

This document provides instructions for setting up the Client Photo Access Portal using Supabase.

## 1. Supabase Database Setup

To make the backend work, we need to create the new `clients` table, set up security rules (RLS), and create the secure login functions.

1. Open your [Supabase Project Dashboard](https://supabase.com/dashboard).
2. Go to the **SQL Editor**.
3. Copy the contents of the `supabase-clients-schema.sql` file and run it. 
   *(This creates the table, the `client_login` function for secure frontend authentication, and the basic RLS policies)*.
4. Copy the contents of the `supabase-clients-schema-admin.sql` file and run it.
   *(This creates the `admin_create_client` and `admin_update_client` functions which securely hash passwords before inserting them into the database)*.

## 2. Admin Authentication Setup

The Admin Dashboard relies on standard Supabase Authentication (Email/Password).

1. In your Supabase Dashboard, go to **Authentication** > **Users**.
2. Click **Add User** -> **Create New User**.
3. Create an admin user (e.g., `admin@example.com` and a secure password).
4. **Important**: Turn off "Confirm email" if you just want to log in immediately, or verify the email if you leave it on.
5. You will use this Email and Password to log in at `yourwebsite.com/admin/login`.

## 3. Environment Variables

Make sure your Vite environment variables are already set up from previous integrations (these are already used by the Google Reviews and now the Client Portal):

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 4. Usage Flow

1. The Admin navigates to `/admin/login` and logs in with the Supabase Auth credentials.
2. The Admin Dashboard at `/admin/dashboard` allows creating, editing, and deleting clients.
3. When creating a client, the admin sets a **Phone Number**, a **Password**, and pastes the **WeTransfer Link**.
4. The client is given the link to `/images`.
5. The client enters their phone number and password.
6. The `client_login` RPC securely checks the credentials without exposing the database to the frontend.
7. Upon success, the client sees a personalized welcome message and a button to open their WeTransfer link!
