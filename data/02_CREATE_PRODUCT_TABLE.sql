CREATE TABLE store (
    game_id serial PRIMARY KEY,
    name VARCHAR (50) UNIQUE NOT NULL,
    genre VARCHAR (50) NOT NULL,
    rating INT NOT NULL,
    price FLOAT,
    thumbnail VARCHAR (200)
);