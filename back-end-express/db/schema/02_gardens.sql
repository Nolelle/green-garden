DROP TABLE IF EXISTS gardens CASCADE;

CREATE TABLE gardens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255),
    image_url VARCHAR(255),
    region VARCHAR(255)
);