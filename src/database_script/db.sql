CREATE DATABASE FIFA21;

USE bns42k3hyrwcecze8r15;


DROP TABLE IF EXISTS players;
CREATE TABLE players(
  commonName VARCHAR(50) NOT NULl,
  first_name VARCHAR(50) NOT NULl,
  last_name VARCHAR(50) NOT NULL,
  position VARCHAR(5) NOT NULL,
  nation VARCHAR(255) NOT NULL,
  team VARCHAR(255) NOT NULL,
  page INT(10) NOT NULL
);
ALTER TABLE players CONVERT TO CHARACTER SET utf8mb4;