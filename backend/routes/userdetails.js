import express from "express";
import sql from "../config/db.js";
import multer from "multer";
import path from "path";

const userDetails_Router = express.Router();

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

userDetails_Router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const selectedUser_details =
      await sql`SELECT * FROM user_details WHERE user_id=${id}`;
    if (selectedUser_details.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(selectedUser_details[0]);
  } catch (err) {
    console.error(err.message);
  }
});

userDetails_Router.get("/fetch/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const selectedUser_details = await sql`SELECT 
      user_image, 
      user_name ,
      email ,
      password,
      password AS confirmpassword, 
      first_name, 
      middle_name, 
      last_name ,
      suffix, 
      sex,
      date_of_birth,  
      civil_status AS civilstatus,
      contact_number AS contactnumber,
      region, 
      province, 
      municipality AS municipal,
      barangay, 
      zone, 
      street, 
      zipcode 
      FROM user_details WHERE user_id=${id}`;
    if (selectedUser_details.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.json(selectedUser_details[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

userDetails_Router.put(
  "/update/useraccount/:id",
  upload.single("user_image"),
  async (req, res) => {
    const { id } = req.params;
    const { user_name, email, password, contactnumber, user_image } = req.body;

    if (!req.file || !req.file.filename) {
      try {
        let updatewithImage = sql`user_image = ${user_image}`;
        const updateWithExistingImage =
          await sql`UPDATE user_details SET ${updatewithImage}, user_name=${user_name}, email=${email}, password=${password}, contact_number=${contactnumber} WHERE user_id = ${id} RETURNING *`;
        if (updateWithExistingImage.length == 0) {
          return res.status(404).send("id doesn't exists");
        }
        res.status(200).json(updateWithExistingImage);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    } else {
      try {
        let updatewithImage = sql`user_image = ${req.file.filename}`;
        const updatedImage =
          await sql`UPDATE user_details SET ${updatewithImage}, user_name=${user_name}, email=${email}, password=${password}, contact_number=${contactnumber} WHERE user_id = ${id}`;
        if (updatedImage.length == 0) {
          return res.status(404).send("id doesn't exists");
        }
        res.status(200).json(updatedImage);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  }
);

userDetails_Router.put("/update/userpersonal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      middle_name,
      last_name,
      suffix,
      date_of_birth,
      sex,
      civilstatus,
      region,
      province,
      municipal,
      barangay,
      zone,
      street,
      zipcode,
    } = req.body;
    const updateUserPesonal = await sql`UPDATE user_details SET 
        first_name = ${first_name}, middle_name = ${middle_name}, last_name = ${last_name}, suffix = ${suffix}, date_of_birth = ${date_of_birth}, sex = ${sex},
        civil_status = ${civilstatus}, region = ${region}, province = ${province}, municipality = ${municipal}, barangay = ${barangay}, zone = ${zone},
        street = ${street}, zipcode = ${zipcode}
      WHERE user_id = ${id} RETURNING *`;
    if (updateUserPesonal.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(updateUserPesonal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

userDetails_Router.put(
  "/update/adminaccount/:id",
  upload.single("user_image"),
  async (req, res) => {
    const { id } = req.params;
    const {
      user_name,
      email,
      password,
      contactnumber,
      region,
      province,
      municipal,
      barangay,
      zone,
      street,
      zipcode,
      user_image,
    } = req.body;

    if (!req.file || !req.file.filename) {
      try {
        let updatewithImage = sql`user_image = ${user_image}`;
        const updateWithExistingImage = sql`UPDATE user_details SET ${updatewithImage}, "user_name"=${user_name}, "email"=${email}, "password"=${password}, "contact_number"=${contactnumber}, region = ${region},
        province = ${province},
        municipality = ${municipal},
        barangay = ${barangay},
        zone = ${zone},
        street = ${street},
        zipcode = ${zipcode} WHERE user_id = ${id}`;
        if (updateWithExistingImage.length == 0) {
          return res.status(404).send("id doesn't exists");
        }
        res.status(200).json(updateWithExistingImage);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    } else {
      try {
        let updatewithImage = sql`user_image = ${req.file.filename}`;
        const updatedImage =
          await sql`UPDATE user_details SET ${updatewithImage}, "user_name"=${user_name}, "email"=${email}, "password"=${password}, "contact_number"=${contactnumber}, region = ${region},
        province = ${province},
        municipality = ${municipal},
        barangay = ${barangay},
        zone = ${zone},
        street = ${street},
        zipcode = ${zipcode} WHERE user_id = ${id}`;
        if (updatedImage.length == 0) {
          return res.status(404).send("id doesn't exists");
        }
        res.status(200).json(updatedImage);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  }
);

export default userDetails_Router;
