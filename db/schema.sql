-- //Write SQL queries here that do the following:
-- Create the burgers_db
-- Switch to or use the burgers_db
-- Create a burgers table with these fields:
-- id: auto incrementing in that serves as the primary key
-- burger_name: a string
-- devoured: a boolean
-- date: a timestamp
-- SELECT CURRENT_TIMESTAMP
 
CREATE DATABASE burgeryummy_db;
USE burgeryummy_db;
CREATE TABLE burgers
(
	id Int (11) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT '0',
	date_id TIMESTAMP,
	-- date datetime NOT NULL DEFAULT NOW()
	PRIMARY KEY (id)
);