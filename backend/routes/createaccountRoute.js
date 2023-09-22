//fix the router setup

import  express  from "express";
import sql from '../config/db.js';
import multer from "multer";
import path from 'path';

const createAccountRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage })


createAccountRouter.get("/", async (req, res) => {
    try {
      const userData = await sql`SELECT * FROM user_details`;
      res.json(userData);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  createAccountRouter.post("/create", 
  upload.single('user_image'),
  async (req, res) => {
    try {
      await sql`INSERT INTO user_details ( 
      "user_type",
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
      "zipcode"
      ) VALUES(
        ${req.body.user_type},
        ${req.file.filename},
        ${req.body.user_name},
        ${req.body.email},
        ${req.body.password},
        ${req.body.first_name},
        ${req.body.middle_name},
        ${req.body.last_name},
        ${req.body.suffix},
        ${req.body.sex},
        ${req.body.date_of_birth},
        ${req.body.civilstatus},
        ${req.body.contactnumber},
        ${req.body.region},
        ${req.body.province},
        ${req.body.municipal},
        ${req.body.barangay},
        ${req.body.zone},
        ${req.body.street},
        ${req.body.zipcode}
      ) RETURNING *`;
      // res.json(newUser);
      // console.log(newUser);
    } catch (err) {
      console.error(err.message);
    }
  });

  export default createAccountRouter;