import express from "express";
import sql from "../config/db.js";
import multer from "multer";
import path from "path";
import isEmailValid from "../../frontend/src/utils/isEmailValid.js";
import isPasswordValid from "../../frontend/src/utils/isPasswordValid.js";

const createAccountRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

createAccountRouter.get("/", async (req, res) => {
  try {
    const userData = await sql`SELECT * FROM user_details`;
    if (userData.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(userData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

createAccountRouter.post(
  "/create",
  upload.single("user_image"),
  async (req, res) => {
    try {
      if (!req.file || !req.file.filename) {
        console.log("No file uploaded");
        return res.status(400).send("No file uploaded.");
      }
      const {
        user_type, user_name, email, password, first_name, middle_name, last_name, suffix, sex,
        date_of_birth, civilstatus, contactnumber, region, province, municipal,
        barangay, zone, street, zipcode,
      } = req.body;
      const newUser = await sql`INSERT INTO user_details ( 
      "user_type", "user_image",  "user_name", "email", "password", "first_name", "middle_name", "last_name", "suffix", "sex", 
      "date_of_birth","civil_status", "contact_number", "region", "province", "municipality", "barangay", 
      "zone", "street","zipcode"
      ) VALUES(
        ${user_type}, ${req.file.filename}, ${user_name}, ${email}, ${password}, ${first_name}, ${middle_name}, ${last_name}, ${suffix},
        ${sex}, ${date_of_birth}, ${civilstatus}, ${contactnumber}, ${region}, ${province}, ${municipal},
        ${barangay}, ${zone}, ${street}, ${zipcode}
      ) RETURNING *`;
      if (newUser[0].length == 0) {
        return res.status(404).send("id doesn't exists");
      }

      if(!isEmailValid(email)){
        console.log('email is false')
        return res.status(400).send("Email is not valid!");
      }

      if(!isPasswordValid(password)){
        console.log('password is false')
        return res.status(400).send(" Password should be at least 8 characters long and include at least one lowercase, one uppercase, one number, and one special character");
      }

      

      console.log(newUser[0]);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

export default createAccountRouter;
