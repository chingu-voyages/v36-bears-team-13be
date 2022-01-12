CREATE TABLE IF NOT EXISTS user(
    id INTEGER NOT NULL,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    phone_number TEXT  UNIQUE,
    date_created TIMESTAMP  NOT NULL,
    date_updated TIMESTAMP  NOT NULL,
    is_verified BOOLEAN ,
    avatar TEXT ,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS user_role(
    userrole_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user(id),
    role_id INTEGER NOT NULL REFERENCES role(id),
    PRIMARY KEY (userrole_id)
);

CREATE TABLE IF NOT EXISTS nanny_profile(
    profile_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user(id),
    rating INTEGER ,
    reviews TEXT,
    PRIMARY KEY (profile_id)
);

CREATE TABLE IF NOT EXISTS role(
    id INTEGER NOT NULL,
    role_name TEXT NOT NULL,
    date_created TIMESTAMP  NOT NULL,
    PRIMARY KEY (id)
);






