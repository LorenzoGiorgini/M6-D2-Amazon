CREATE TABLE IF NOT EXISTS
	products(
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name VARCHAR(50) NOT NULL,
        description VARCHAR(100) NOT NULL,
        brand VARCHAR(25) NOT NULL,
		image_url VARCHAR(255),
        price INTEGER NOT NULL, 
		category VARCHAR(20) NOT NULL,
		created_at TIMESTAMPTZ DEFAULT NOW(),
		updated_at TIMESTAMPTZ DEFAULT NOW()
	);


CREATE TABLE IF NOT EXISTS public.reviews
(
    id_review bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    comment character varying(255) COLLATE pg_catalog."default" NOT NULL,
    rate integer NOT NULL,
    product_id bigint NOT NULL,
    CONSTRAINT reviews_pkey PRIMARY KEY (id_review),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)