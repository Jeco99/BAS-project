const sql = require("../config/db");

async function createTable(){
    try{
        // const data = await sql `
        // CREATE TABLE IF NOT EXISTS user_details (
        //     user_id SERIAL PRIMARY KEY,
        //     user_image TEXT NOT NULL,
        //     user_name VARCHAR(255) NOT NULL,
        //     user_email VARCHAR(255) NOT NULL,
        //     user_password VARCHAR(255) NOT NULL,
        //     user_firstname VARCHAR(255) NOT NULL,
        //     user_middlename VARCHAR(255) NOT NULL,
        //     user_lastname VARCHAR(255) NOT NULL,
        //     user_suffix TEXT,
        //     user_sex VARCHAR(255) NOT NULL,
        //     user_date_of_birth DATE NOT NULL,
        //     user_civil_status VARCHAR(255) NOT NULL,
        //     user_contact_number INT NOT NULL,
        //     user_region VARCHAR(255) NOT NULL,
        //     user_province VARCHAR(255) NOT NULL,
        //     user_municipality VARCHAR(255) NOT NULL,
        //     user_barangay VARCHAR(255) NOT NULL,
        //     user_zone VARCHAR(255) NOT NULL,
        //     user_street VARCHAR(255) NOT NULL,
        //     user_type VARCHAR(255) NOT NULL
        //   ); `
        const  data  =  await  sql`
			CREATE TABLE IF NOT EXISTS users (
			user_id SERIAL PRIMARY KEY,
			first_name VARCHAR(255) NOT NULL,
			last_name VARCHAR(255) NOT NULL
			)`
          console.log("Table created successfully!");
          sql.end();
    } catch (error) {
        console.error("Error creating table: ", error);
    }
}

createTable()