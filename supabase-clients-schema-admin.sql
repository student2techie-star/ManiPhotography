-- RPC for Admins to create a client (hashes password)
CREATE OR REPLACE FUNCTION admin_create_client(
    p_customer_name TEXT,
    p_phone TEXT,
    p_password TEXT,
    p_wetransfer_url TEXT,
    p_status TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_id UUID;
BEGIN
    INSERT INTO clients (customer_name, phone_number, password_hash, wetransfer_url, status)
    VALUES (p_customer_name, p_phone, crypt(p_password, gen_salt('bf')), p_wetransfer_url, p_status)
    RETURNING id INTO v_id;
    
    RETURN v_id;
END;
$$;

-- RPC for Admins to update a client (hashes password only if provided)
CREATE OR REPLACE FUNCTION admin_update_client(
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
AS $$
BEGIN
    IF p_password IS NOT NULL AND trim(p_password) != '' THEN
        UPDATE clients 
        SET customer_name = p_customer_name,
            phone_number = p_phone,
            password_hash = crypt(p_password, gen_salt('bf')),
            wetransfer_url = p_wetransfer_url,
            status = p_status,
            updated_at = now()
        WHERE id = p_id;
    ELSE
        UPDATE clients 
        SET customer_name = p_customer_name,
            phone_number = p_phone,
            wetransfer_url = p_wetransfer_url,
            status = p_status,
            updated_at = now()
        WHERE id = p_id;
    END IF;
END;
$$;
