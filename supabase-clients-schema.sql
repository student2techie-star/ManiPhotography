-- Enable the pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create clients table
CREATE TABLE clients (
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
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Admin access policy (Requires standard Supabase Auth session)
-- Only authenticated users (admins) can view, insert, update, or delete clients.
CREATE POLICY "Admins can do everything on clients"
    ON clients
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- No public access policies to the table itself. 
-- Public access is strictly mediated through the secure RPC function below.

-- RPC Function for Client Login
-- This function securely verifies the phone and password without exposing the table.
CREATE OR REPLACE FUNCTION client_login(p_phone TEXT, p_password TEXT)
RETURNS TABLE (
    success BOOLEAN,
    customer_name TEXT,
    wetransfer_url TEXT,
    message TEXT
) 
LANGUAGE plpgsql
SECURITY DEFINER -- Runs with elevated privileges so it can read the table despite RLS
AS $$
DECLARE
    v_client clients%ROWTYPE;
    v_found BOOLEAN := false;
BEGIN
    -- Loop through all clients with this phone number
    FOR v_client IN SELECT * FROM clients WHERE phone_number = p_phone LOOP
        -- Check if password matches for this specific entry
        IF v_client.password_hash = crypt(p_password, v_client.password_hash) THEN
            IF v_client.status = 'active' THEN
                success := true;
                customer_name := v_client.customer_name;
                wetransfer_url := v_client.wetransfer_url;
                message := 'Success';
                v_found := true;
                RETURN NEXT;
            ELSE
                success := false;
                customer_name := NULL;
                wetransfer_url := NULL;
                message := 'This photo access is currently unavailable. Please contact the photography studio.';
                v_found := true;
                RETURN NEXT;
            END IF;
        END IF;
    END LOOP;

    -- If no matching phone + password combination was found
    IF NOT v_found THEN
        success := false;
        customer_name := NULL;
        wetransfer_url := NULL;
        message := 'Phone number or password is incorrect. Please check your details and try again.';
        RETURN NEXT;
    END IF;
END;
$$;
