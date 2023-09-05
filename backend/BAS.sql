-- Database: BAS

-- DROP DATABASE IF EXISTS "BAS";

-- CREATE DATABASE "BAS"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS appointment;
DROP TABLE IF EXISTS request;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS notification;


CREATE TABLE user_details (
  user_id SERIAL PRIMARY KEY,
  user_image TEXT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  user_firstname VARCHAR(255) NOT NULL,
  user_middlename VARCHAR(255) NOT NULL,
  user_lastname VARCHAR(255) NOT NULL,
  user_suffix TEXT,
  user_sex VARCHAR(255) NOT NULL,
  user_date_of_birth DATE NOT NULL,
  user_civil_status VARCHAR(255) NOT NULL,
  user_contact_number INT NOT NULL,
  user_region VARCHAR(255) NOT NULL,
  user_province VARCHAR(255) NOT NULL,
  user_municipality VARCHAR(255) NOT NULL,
  user_barangay VARCHAR(255) NOT NULL,
  user_zone VARCHAR(255) NOT NULL,
  user_street VARCHAR(255) NOT NULL,
  user_type VARCHAR(255) NOT NULL
);

---------
-----INSERT DATA
-----------

CREATE TABLE appointment(
  appointment_id SERIAL PRIMARY KEY ,
  request_type TEXT NOT NULL,
  purpose TEXT NOT NULL,
  appointment_time TEXT NOT NULL,
  appointment_date TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL
);

CREATE TABLE request(
  request_id SERIAL PRIMARY KEY,
  request_status TEXT NOT NULL,
  date_time_approval TIMESTAMP NOT NULL
);

CREATE TABLE post(
  post_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  post_time_created INT NOT NULL
);

CREATE TABLE notification(
  notification_id  SERIAL PRIMARY KEY,
  notification_type TEXT,
  user_id INT,
  reference_id INT 
);

-- INSERT INTO user()