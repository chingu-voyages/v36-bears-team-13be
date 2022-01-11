CREATE TABLE nanny(
    id INTEGER NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    is_verified BOOLEAN NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE client(
    id INTEGER NOT NULL,
    username VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    is_verified VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE client_listings(
    id INTEGER NOT NULL,
    created_by INTEGER NOT NULL REFERENCES client(id) ON DELETE CASCADE,
    created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE nanny_listing_transactions(
    id INTEGER NOT NULL,
    nany_id INTEGER NOT NULL REFERENCES nanny(id),
    listing_id INTEGER NOT NULL REFERENCES client_listings(id),
    PRIMARY KEY (id)
);

