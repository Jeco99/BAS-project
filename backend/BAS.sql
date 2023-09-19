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
  email VARCHAR(255) NOT NULL,
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
  appointment_time_created TIME NOT NULL DEFAULT now(),
  appointment_date_created DATE NOT NULL DEFAULT now(),
  status VARCHAR(255) NOT NULL DEFAULT 'Pending'
);

ALTER TABLE appointment
ADD CONSTRAINT fk_user_details
FOREIGN KEY (user_id) 
REFERENCES user_details (user_id);

CREATE TABLE request(
  request_id SERIAL PRIMARY KEY,
  request_status VARCHAR(255) NOT NULL,
  date_time_approval TIMESTAMP NOT NULL DEFAULT now(),
);

CREATE TABLE post(
  post_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  post_time_created TIME NOT NULL DEFAULT now(),
  post_date_created DATE NOT NULL DEFAULT now()
);

CREATE TABLE notification(
  notification_id  SERIAL PRIMARY KEY,
  notification_type VARCHAR(255)
);



-- INSERT user data
INSERT INTO user_details(user_image, user_name, email, password, first_name,	middle_name, last_name, suffix, sex, date_of_birth,	civil_status, contact_number, region, province,	municipality,	barangay,	zone, street, zipcode,	user_type) VALUES					
('http://dummyimage.com/175x100.png/cc0000/ffffff','bfolbig0','bfolbig0@telegraph.co.uk','eN7,d6BStqU95T5','Bobbie','Sutor','Folbig','II','Male','1995-09-02','Single','6397678888589','Region VI (Western Visayas)','Iloilo','Leon','Buga','6B','calampinay',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','ffaustian1','ffaustian1@arstechnica.com','sF1(Ob~)u_h','Filberte','Rexworthy','Faustian','II','Female','2019-12-22','Married','63977044093744','Region VI (Western Visayas)','Iloilo','Leon','Buga','3','dao',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','wrodolphe2','wrodolphe2@freewebs.com','eM1_Y#&#A3#>','Winnah','Frazier','Rodolphe','IV','Female','2008-01-09','Domestic Partnership/Civil Union','63963923276941','Region VI (Western Visayas)','Iloilo','Leon','Buga','5','cabalfin',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','bhorry3','bhorry3@slashdot.org','pX1%xwAE','Buddy','Moyler','Horry','III','Male','2011-06-04','Widowed','6399353568514663','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','cabrias',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','bsnazel4','bsnazel4@wp.com','wX5_M5.d(11"LR','Brandon','Batrop','Snazel','Sr','Male','2000-7-13-','Divorced','63927925569484','Region VI (Western Visayas)','Iloilo','Leon','Buga','4','sitio buklod bugtong',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','ffillimore5','ffillimore5@stumbleupon.com','aJ1(X(Mxf6','Fabien','Dissman','Fillimore','Jr','Male','2004-08-20','Separated','63975636334164','Region VI (Western Visayas)','Iloilo','Leon','Buga','6A','cabanas',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','sdwire6','sdwire6@elpais.com','oV1(3\Cr?B24F','Stillmann','Dullaghan','Dwire','Jr','Male','1990-07-10','Widowed','63934066919302','Region VI (Western Visayas)','Iloilo','Leon','Buga','2','camarista',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','qdalliwatr7','qdalliwatr7@globo.com','rL4\y&#N7','Quintana','Gooch','Dalliwatr','Jr','Female','2000-07-25','Married','63985801433560','Region VI (Western Visayas)','Iloilo','Leon','Buga','2','camarista',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','tillem8','tillem8@facebook.com','rC7>NfR)O|nq|T','Tony','Simionescu','Illem','II','Female','1998-06-30','Domestic Partnership/Civil Union','63967291242957','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','cabanas',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','cwilsone9','cwilsone9@foxnews.com','aX8*_&/eok\Y$)_G','Casar','Lowres','Wilsone','Sr','Male','1997-07-15','Divorced','63961688520068','Region VI (Western Visayas)','Iloilo','Leon','Buga','6A','cabalfin',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','bchristiea','bchristiea@jugem.jp','bX3|}hAfVfQ?vZL','Brittan','Laxe','Christie','Sr','Female','2009-06-10','Separated','63914382856571','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','dao',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','bleffekb','bleffekb@utexas.edu','lD5~k#.Jg\yx("S{','Barnard','Seres','Leffek','Sr','Male','1990-06-20','Single','63991296626180','Region VI (Western Visayas)','Iloilo','Leon','Buga','1','calampinay',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','tmedinac','tmedinac@ow.ly','aB7~N_oX\)@2','Theodore','Downs','Medina','III','Male','2000-08-11','Widowed','63993460700108','Region VI (Western Visayas)','Iloilo','Leon','Buga','2','calampinay',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','hpostand','hpostand@gov.uk','vR0{Nqm?qtYU7gn!','Hercules','Burtonwood','Postan','III','Male','2002-07-23','Married','63947168115643','Region VI (Western Visayas)','Iloilo','Leon','Buga','5','sitio buklod bugtong',5026,'resident'),
('http://dummyimage.com/175x100.png/cc0000/ffffff','buga','buga@gmail.com','buga','NA','NA','NA','NA','NA','NA','NA','6391267379265','Region VI (Western Visayas)','Iloilo','Leon','Buga','NA','NA',5026,'admin');



-- INSERT appointment data
INSERT INTO appointment(request_type,	purpose,	appointment_time,	appointment_date) VALUES
('barangay certificate',	'to claim important document','8:00 - 9:00',	'2023-09-04'),
('barangay clearance',	'to work',	'3:00 - 4:00', 	'2023-09-06'),
('barangay permit',	'to work',	'9:00 - 10:00', 	'2023-09-05'),
('barangay permit',	'to work',	'4:00 - 5:00', 	'2023-09-07'),
('barangay permit',	'to work',	'2:00 - 3:00', 	'2023-09-08'),
('barangay permit',	'to claim important document','1:00 - 2:00',	'2023-09-05'),
('barangay clearance',	'to claim important document','12:00 - 1:00',	'2023-09-07'),
('barangay certificate',	'to work',	'10:00 - 11:00', 	'2023-09-04'),
('barangay permit',	'to claim important document','3:00 - 4:00',	'2023-09-06'),
('barangay permit',	'to claim important document','8:00 - 9:00',	'2023-09-08'),
('barangay certificate',	'to work',	'1:00 - 2:00', 	'2023-09-07'),
('barangay clearance',	'to claim important document','3:00 - 4:00',	'2023-09-07'),
('barangay clearance',	'to claim important document','10:00 - 11:00',	'2023-09-08'),
('barangay permit',	'to work',	'8:00 - 9:00', 	'2023-09-07'),
('barangay clearance',	'to work',	'4:00 - 5:00', 	'2023-09-04');


INSERT INTO post(title, description) VALUES 
('Safety Technician III',	'Plain Radiography of Right Scapula'),
('Structural Engineer',	'Bypass Cystic Duct to CBD w Intralum Dev, Perc Endo'),
('Research Associate',	'Replace L Hip Jt w Metal on Poly, Uncement, Open'),
('VP Product Management',	'Dilation of Accessory Pancreatic Duct, Endo'),
('Chief Design Engineer',	'Revision of Drainage Device in R Pleural Cav, Open Approach'),
('Legal Assistant',	'Dilate of R Verteb Art with 4 Drug-elut, Perc Endo Approach'),
('Environmental Tech',	'Destruction of Left Acromioclavicular Joint, Perc Approach'),
('Automation Specialist III',	'Replacement of R Hand Art with Synth Sub, Open Approach'),
('VP Marketing',	'Release Right Frontal Bone, Percutaneous Endoscopic Approach'),
('Marketing Manager',	'Dilation of R Lg Intest with Intralum Dev, Perc Approach'),
('Safety Technician IV',	'Removal of Infusion Device from Ureter, External Approach'),
('Engineer III',	'Repair Right Nipple, Percutaneous Approach'),
('Staff Accountant IV',	'Release Right Foot Artery, Percutaneous Endoscopic Approach'),
('Chief Design Engineer',	'Introduce of Liquid Brachy into Cran Cav/Brain, Via Opening'),
('Quality Engineer',	'Dilate L Peroneal Art, Bifurc, w 2 Intralum Dev, Perc');


--Add Foreign Key
ALTER TABLE appointment 
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) 
REFERENCES user_details(user_id);


SELECT 
appoint.appointment_id AS appointment_id,
	CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
	appoint.appointment_time AS appointment_time,
	appoint.appointment_date AS appointment_date,
	appoint.request_type AS request_type,
	appoint.purpose AS purpose,
	appoint.appointment_time_created AS appointment_time_created,
	appoint.appointment_date_created AS appointment_date_created,
	appoint.status AS status
FROM appointment AS appoint
	INNER JOIN user_details AS users ON appoint.appointment_id = users.user_id;