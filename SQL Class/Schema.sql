CREATE TABLE user (
    userId VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email varchar(50) unique not NULL,
    password varchar(50) not null
);