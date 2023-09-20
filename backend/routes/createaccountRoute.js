//fix the router setup

import  express  from "express";
import sql from '../config/db.js';

const createAccountRouter = express.Router();

createAccountRouter.get("/", async (req, res) => {
    try {
      const userData = await sql`SELECT * FROM user_details`;
      res.json(userData);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  createAccountRouter.post("/create", async (req, res) => {
    try {
      const {
        user_image,
        user_name,
        email,
        password,
        first_name,
        middle_name,
        last_name,
        suffix,
        sex,
        date_of_birth,
        civil_status,
        contact_number,
        region,
        province,
        municipality,
        barangay,
        zone,
        street,
        zipcode,
        user_type,
      } = req.body;
      // console.log(req.params);
      const newUser = await sql`INSERT INTO user_details ( 
      "user_image", 
      "user_name",
      "email",
      "password", 
      "first_name", 
      "middle_name", 
      "last_name",
      "suffix", 
      "sex", 
      "date_of_birth",
      "civil_status", 
      "contact_number", 
      "region", 
      "province", 
      "municipality", 
      "barangay", 
      "zone", 
      "street", 
      "zipcode", 
      "user_type") VALUES(${user_image}, ${user_name}, ${email}, ${password}, ${first_name}, 
        ${middle_name}, ${last_name}, ${suffix}, ${sex}, ${date_of_birth}, ${civil_status}, 
        ${contact_number}, ${region},  ${province}, ${municipality}, ${barangay}, ${zone}, ${street}, ${zipcode}, ${user_type}) RETURNING *`;
      res.json(newUser);
      console.log(newUser);
    } catch (err) {
      console.error(err.message);
    }
  });

  export default createAccountRouter;