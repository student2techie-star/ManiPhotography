-- ============================================================
-- CLIENTS TABLE & AUTH FUNCTIONS
-- Run this file in Supabase SQL Editor to set up the clients system
-- ============================================================

-- Enable the pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create clients table (phone_number is NOT unique to allow multiple events)
CREATE TABLE public.clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    wetransfer_url TEXT,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Admin access policy: only authenticated users (admins) can read/write directly
CREATE POLICY "Admins can do everything on clients"
    ON public.clients
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ============================================================
-- CLIENT LOGIN FUNCTION
-- Securely verifies phone + password without exposing the table to anon users
-- ============================================================
CREATE OR REPLACE FUNCTION public.client_login(p_phone TEXT, p_password TEXT)
RETURNS TABLE (
    success BOOLEAN,
    customer_name TEXT,
    wetransfer_url TEXT,
    message TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_client public.clients%ROWTYPE;
BEGIN
    -- Find client by phone number AND matching password in one query
    SELECT * INTO v_client
    FROM public.clients
    WHERE public.clients.phone_number = p_phone
      AND public.clients.password_hash = crypt(p_password, public.clients.password_hash)
    LIMIT 1;

    IF v_client.id IS NOT NULL THEN
        IF v_client.status = 'active' THEN
            RETURN QUERY SELECT
                true::BOOLEAN,
                v_client.customer_name::TEXT,
                v_client.wetransfer_url::TEXT,
                'Success'::TEXT;
        ELSE
            RETURN QUERY SELECT
                false::BOOLEAN,
                NULL::TEXT,
                NULL::TEXT,
                'This photo access is currently unavailable. Please contact the photography studio.'::TEXT;
        END IF;
    ELSE
        RETURN QUERY SELECT
            false::BOOLEAN,
            NULL::TEXT,
            NULL::TEXT,
            'Phone number or password is incorrect. Please check your details and try again.'::TEXT;
    END IF;
END;
$$;

-- Grant execute permission to anon and authenticated roles
GRANT EXECUTE ON FUNCTION public.client_login(TEXT, TEXT) TO anon, authenticated;
