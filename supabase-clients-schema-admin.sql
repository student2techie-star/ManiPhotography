-- ============================================================
-- ADMIN RPC FUNCTIONS
-- Run this AFTER supabase-clients-schema.sql
-- ============================================================

-- Admin: Create a new client (hashes password with pgcrypto)
CREATE OR REPLACE FUNCTION public.admin_create_client(
    p_customer_name TEXT,
    p_phone TEXT,
    p_password TEXT,
    p_wetransfer_url TEXT,
    p_status TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_id UUID;
BEGIN
    INSERT INTO public.clients (customer_name, phone_number, password_hash, wetransfer_url, status)
    VALUES (
        p_customer_name,
        p_phone,
        crypt(p_password, gen_salt('bf')),
        p_wetransfer_url,
        p_status
    )
    RETURNING id INTO v_id;

    RETURN v_id;
END;
$$;

-- Grant execute to authenticated role (admins only)
GRANT EXECUTE ON FUNCTION public.admin_create_client(TEXT, TEXT, TEXT, TEXT, TEXT) TO authenticated;


-- Admin: Update an existing client (only re-hashes password if a new one is provided)
CREATE OR REPLACE FUNCTION public.admin_update_client(
    p_id UUID,
    p_customer_name TEXT,
    p_phone TEXT,
    p_password TEXT,
    p_wetransfer_url TEXT,
    p_status TEXT
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
    IF p_password IS NOT NULL AND trim(p_password) != '' THEN
        UPDATE public.clients
        SET
            customer_name = p_customer_name,
            phone_number = p_phone,
            password_hash = crypt(p_password, gen_salt('bf')),
            wetransfer_url = p_wetransfer_url,
            status = p_status,
            updated_at = now()
        WHERE id = p_id;
    ELSE
        UPDATE public.clients
        SET
            customer_name = p_customer_name,
            phone_number = p_phone,
            wetransfer_url = p_wetransfer_url,
            status = p_status,
            updated_at = now()
        WHERE id = p_id;
    END IF;
END;
$$;

-- Grant execute to authenticated role (admins only)
GRANT EXECUTE ON FUNCTION public.admin_update_client(UUID, TEXT, TEXT, TEXT, TEXT, TEXT) TO authenticated;
