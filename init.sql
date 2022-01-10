CREATE TABLE IF NOT EXISTS advert (
	id serial PRIMARY KEY,
	title VARCHAR ( 50 ) NOT NULL,
	description VARCHAR ( 50 ) NOT NULL
);

INSERT INTO advert(id, title, description)
VALUES (1, 'asd', 'description')