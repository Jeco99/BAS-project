ALTER TABLE appointment
DROP CONSTRAINT fk_user_details CASCADE;

ALTER TABLE post
DROP CONSTRAINT fk_user_details CASCADE;


DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS appointment;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS notification;

CREATE TABLE user_details (
  user_id SERIAL PRIMARY KEY,
  user_image TEXT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  middle_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  suffix VARCHAR(255),
  sex VARCHAR(255) NOT NULL,
  date_of_birth VARCHAR(255),
  civil_status VARCHAR(255) NOT NULL,
  contact_number VARCHAR(255) NOT NULL,
  region VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  municipality VARCHAR(255) NOT NULL,
  barangay VARCHAR(255) NOT NULL,
  zone VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  zipcode INT NOT NULL,
  user_type VARCHAR(255) NOT NULL
);

CREATE TABLE appointment(
  appointment_id SERIAL PRIMARY KEY ,
  request_type VARCHAR(255) NOT NULL,
  purpose TEXT NOT NULL,
  appointment_time VARCHAR(255) NOT NULL,
  appointment_date VARCHAR(255) NOT NULL,
  appointment_time_date_created TIMESTAMP NOT NULL DEFAULT now(),
  status VARCHAR(255) NOT NULL DEFAULT 'Pending',
  date_time_approval TIMESTAMP NOT NULL DEFAULT now(),
  user_id INT NOT NULL
);


-- INSERT user data
INSERT INTO user_details(user_image, user_name, email, password, first_name,	middle_name, last_name, suffix, sex, date_of_birth,	civil_status, contact_number, region, province,	municipality,	barangay,	zone, street, zipcode,	user_type) VALUES					
('user_image-1695577499482-605592072.jpg','bfolbig0','bfolbig0@telegraph.co.uk','eN7,d6BStqU95T5','Bobbie','Sutor','Folbig','II','Male','1995-09-02','Single','6397678888589','Region VI (Western Visayas)','Iloilo','Leon','Buga','6B','calampinay',5026,'resident'),
('user_image-1695577499482-605592072.jpg','ffaustian1','ffaustian1@arstechnica.com','sF1(Ob~)u_h','Filberte','Rexworthy','Faustian','II','Female','2019-12-22','Married','63977044093744','Region VI (Western Visayas)','Iloilo','Leon','Buga','3','dao',5026,'resident'),
('user_image-1695577499482-605592072.jpg','wrodolphe2','wrodolphe2@freewebs.com','eM1_Y#&#A3#>','Winnah','Frazier','Rodolphe','IV','Female','2008-01-09','Domestic Partnership/Civil Union','63963923276941','Region VI (Western Visayas)','Iloilo','Leon','Buga','5','cabalfin',5026,'resident'),
('user_image-1695577499482-605592072.jpg','bhorry3','bhorry3@slashdot.org','pX1%xwAE','Buddy','Moyler','Horry','III','Male','2011-06-04','Widowed','6399353568514663','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','cabrias',5026,'resident'),
('user_image-1695577499482-605592072.jpg','bsnazel4','bsnazel4@wp.com','wX5_M5.d(11"LR','Brandon','Batrop','Snazel','Sr','Male','2000-7-13-','Divorced','63927925569484','Region VI (Western Visayas)','Iloilo','Leon','Buga','4','sitio buklod bugtong',5026,'resident'),
('user_image-1695577499482-605592072.jpg','ffillimore5','ffillimore5@stumbleupon.com','aJ1(X(Mxf6','Fabien','Dissman','Fillimore','Jr','Male','2004-08-20','Separated','63975636334164','Region VI (Western Visayas)','Iloilo','Leon','Buga','6A','cabanas',5026,'resident'),
('user_image-1695577499482-605592072.jpg','sdwire6','sdwire6@elpais.com','oV1(3\Cr?B24F','Stillmann','Dullaghan','Dwire','Jr','Male','1990-07-10','Widowed','63934066919302','Region VI (Western Visayas)','Iloilo','Leon','Buga','2','camarista',5026,'resident'),
('imagefile-1695360092726-79817980.jpeg','qdalliwatr7','qdalliwatr7@globo.com','rL4\y&#N7','Quintana','Gooch','Dalliwatr','Jr','Female','2000-07-25','Married','63985801433560','Region VI (Western Visayas)','Iloilo','Leon','Buga','2','camarista',5026,'resident'),
('imagefile-1695360092726-79817980.jpeg','tillem8','tillem8@facebook.com','rC7>NfR)O|nq|T','Tony','Simionescu','Illem','II','Female','1998-06-30','Domestic Partnership/Civil Union','63967291242957','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','cabanas',5026,'resident'),
('imagefile-1695360092726-79817980.jpeg','cwilsone9','cwilsone9@foxnews.com','aX8*_&/eok\Y$)_G','Casar','Lowres','Wilsone','Sr','Male','1997-07-15','Divorced','63961688520068','Region VI (Western Visayas)','Iloilo','Leon','Buga','6A','cabalfin',5026,'resident'),
('imagefile-1695360092726-79817980.jpeg','bchristiea','bchristiea@jugem.jp','bX3|}hAfVfQ?vZL','Brittan','Laxe','Christie','Sr','Female','2009-06-10','Separated','63914382856571','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','dao',5026,'resident'),
('imagefile-1695360092726-79817980.jpeg','bleffekb','bleffekb@utexas.edu','lD5~k#.Jg\yx("S{','Barnard','Seres','Leffek','Sr','Male','1990-06-20','Single','63991296626180','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','calampinay',5026,'resident'),
('imagefile-1695360092726-79817980.jpeg','tmedinac','tmedinac@ow.ly','aB7~N_oX\)@2','Theodore','Downs','Medina','III','Male','2000-08-11','Widowed','63993460700108','Region VI (Western Visayas)','Iloilo','Leon','Buga','2','calampinay',5026,'resident'),
('imagefile-1695360092726-79817980.jpeg','hpostand','hpostand@gov.uk','vR0{Nqm?qtYU7gn!','Hercules','Burtonwood','Postan','III','Male','2002-07-23','Married','63947168115643','Region VI (Western Visayas)','Iloilo','Leon','Buga','5','sitio buklod bugtong',5026,'resident'),
('user_image-1695895512379-379290203.jpg','buga','buga@gmail.com','buga','NA','NA','NA','NA','NA','NA','NA','6391267379265','Region VI (Western Visayas)','Iloilo','Leon','Buga','NA','NA',5026,'admin');



SELECT * from user_details;

-- INSERT appointment data
INSERT INTO appointment(request_type,	purpose,	appointment_time,	appointment_date, user_id) VALUES
('barangay certificate',	'to claim important document','8:00 - 9:00',	'2023-09-04', '1'),
('barangay clearance',	'to work',	'3:00 - 4:00', 	'2023-09-06', '1'),
('barangay permit',	'to work',	'9:00 - 10:00', 	'2023-09-05', '1'),
('barangay permit',	'to work',	'4:00 - 5:00', 	'2023-09-07','2'),
('barangay permit',	'to work',	'2:00 - 3:00', 	'2023-09-08','2'),
('barangay permit',	'to claim important document','1:00 - 2:00',	'2023-09-05','2'),
('barangay clearance',	'to claim important document','12:00 - 1:00',	'2023-09-07','3'),
('barangay certificate',	'to work',	'10:00 - 11:00', 	'2023-09-04','3'),
('barangay permit',	'to claim important document','3:00 - 4:00',	'2023-09-06','3'),
('barangay permit',	'to claim important document','8:00 - 9:00',	'2023-09-08','4'),
('barangay certificate',	'to work',	'1:00 - 2:00', 	'2023-09-07','4'),
('barangay clearance',	'to claim important document','3:00 - 4:00',	'2023-09-07','4'),
('barangay clearance',	'to claim important document','10:00 - 11:00',	'2023-09-08','5'),
('barangay permit',	'to work',	'8:00 - 9:00', 	'2023-09-07','5'),
('barangay clearance',	'to work',	'4:00 - 5:00', 	'2023-09-04','5');

ALTER TABLE appointment
ADD CONSTRAINT fk_user_details
FOREIGN KEY (user_id) 
REFERENCES user_details (user_id);

SELECT * FROM appointment;

--query for report
-- SELECT 
-- 	appoint.appointment_id AS appointment_id,
-- 	CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
-- 	appoint.appointment_time AS appointment_time,
-- 	appoint.appointment_date AS appointment_date,
-- 	appoint.request_type AS request_type,
-- 	appoint.purpose AS purpose,
-- 	DATE(appointment_time_date_created) AS appointment_date_created,
-- 	TO_CHAR(appointment_time_date_created, 'HH:MI:SS') AS appointment_time_created,
-- 	appoint.status AS status 
-- 	users.user_id AS user_id
-- FROM appointment AS appoint 
-- INNER JOIN user_details AS users 
-- ON appoint.user_id =users.user_id
-- WHERE status = 'Pending' 
-- ORDER BY appointment_time_date_created;

SELECT 
appoint.appointment_id AS appointment_id,
	CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
	appoint.appointment_time AS appointment_time,
	appoint.appointment_date AS appointment_date,
	appoint.request_type AS request_type,
	appoint.purpose AS purpose,
	DATE(appointment_time_date_created) AS appointment_date_created,
	TO_CHAR(appointment_time_date_created, 'HH:MI:SS') AS appointment_time_created,
	appoint.status AS status,
	users.user_id AS user_id,
	users.barangay AS barangay
FROM appointment AS appoint 
INNER JOIN user_details AS users 
ON appoint.user_id =users.user_id
WHERE barangay = 'Buga' AND status = 'Pending'
ORDER BY appointment_time_date_created;


-- SELECT 
-- *
-- FROM appointment AS appoint 
-- INNER JOIN user_details AS users 
-- ON appoint.user_id =users.user_id;


--query for history for admin
SELECT 
	appoint.appointment_id AS appointment_id,
	CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
	appoint.appointment_time AS appointment_time,
	appoint.appointment_date AS appointment_date,
	appoint.request_type AS request_type,
	appoint.purpose AS purpose,
	appoint.date_time_approval AS date_time_approval,
	DATE( date_time_approval) AS approval_date_created,
	TO_CHAR( date_time_approval, 'HH:MI:SS') AS approval_time_created,
	appoint.status AS status,
	users.barangay AS barangay
FROM appointment AS appoint 
INNER JOIN user_details AS users 
ON appoint.user_id =users.user_id
WHERE barangay = 'Buga' AND status IN ('Completed', 'Incomplete')
ORDER BY date_time_approval;


--query history for user
SELECT 
	appoint.appointment_id AS appointment_id,
	CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
	appoint.appointment_time AS appointment_time,
	appoint.appointment_date AS appointment_date,
	appoint.request_type AS request_type,
	appoint.purpose AS purpose,
	appoint.date_time_approval AS date_time_approval,
	DATE( date_time_approval) AS approval_date_created,
	TO_CHAR( date_time_approval, 'HH:MI:SS') AS approval_time_created,
	appoint.status AS status,
	users.user_id,
	users.barangay AS barangay
FROM appointment AS appoint 
INNER JOIN user_details AS users 
ON appoint.user_id =users.user_id
WHERE barangay = 'Buga' 
AND users.user_id = 2
AND status IN ('Completed', 'Incomplete')
ORDER BY date_time_approval;



CREATE TABLE post(
  post_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  post_time_date_created TIMESTAMP NOT NULL DEFAULT now(),
  update_time_date_created TIMESTAMP NOT NULL DEFAULT now(),
  user_id INT NOT NULL
);

ALTER TABLE post
ADD CONSTRAINT fk_user_details
FOREIGN KEY (user_id) 
REFERENCES user_details (user_id);


INSERT INTO post(title, description, user_id) VALUES 
('1st Regular Election of Purok Officer Under Barangay Ordinance',	'We have Election of Purok Officers particularly on the folloring mandatory positions: President, Vice President, Secretary, Ttreasurer, and Auditor on SUnday. I encourage everyone to attend.', '15'),
('Alumni Homecoming',	'We encourage one representative in each batch to attend a meeting for upcoming Alumni Homecoming in the December 2023', '15'),
('Upcoming Fiesta',	'Important meeting to be held at our barangay plaza for upcoming fiesta of February 30', '15')


---query post
SELECT 
	post.title AS title,
	post.description AS description,
	DATE( post_time_date_created) AS post_date_created,
	TO_CHAR( post_time_date_created, 'HH:MI:SS') AS post_time_created,
	users.barangay AS barangay
FROM post 
INNER JOIN user_details AS users ON post.user_id = users.user_id
WHERE barangay = 'Buga'
ORDER BY post_time_date_created;

SELECT * FROM post;

UPDATE post 
SET title='1',description='2' 
WHERE post_id =2;


------
CREATE TABLE notification(
  notification_id  SERIAL PRIMARY KEY,
  notification_type VARCHAR(255)
);
