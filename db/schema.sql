DROP DATABASE IF EXISTS swap_meet_db;

CREATE DATABASE swap_meet_db;

DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS users;

CREATE TABLE categories(
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR (30),
    -- web_page VARCHAR (255),
    PRIMARY KEY (id)
);

CREATE TABLE item(
    id INTEGER AUTO_INCREMENT NOT NULL,
    description VARCHAR(255),
    image_url VARCHAR (255),
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES categories(id)
);

CREATE TABLE users(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR (50),
    password VARCHAR (30),
    email VARCHAR(80),
    phone_number INTEGER,
    address VARCHAR(150),
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES item(id),
    -- FOREIGN KEY (id) REFERENCES categories(id)
);