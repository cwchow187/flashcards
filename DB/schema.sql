DROP DATABASE IF EXISTS film_db;

CREATE DATABASE film_db;

USE film_db;

CREATE TABLE film_actors (
	id INT NOT NULL AUTO_INCREMENT,
	actors_1 VARCHAR(255) NOT NULL,
	actors_2 VARCHAR(255) NOT NULL,
	actors_3 VARCHAR(255) NOT NULL,
	film VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

-- CREATE TABLE film_categories (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	film VARCHAR(255) NOT NULL,
-- 	film_category VARCHAR(255) NOT NULL,
-- 	PRIMARY KEY(id)

-- );