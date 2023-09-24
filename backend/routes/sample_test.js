import express from "express";
import sql from "../config/db.js";
import multer from "multer";
import path from 'path';

const sample_testRouter = express.Router();
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

// const upload = multer({ dest: 'uploads/' });

sample_testRouter.get("/images", async (req, res) => {
  try {
    const imageData = await sql`SELECT * FROM uploadImage`;
    res.json(imageData);
  } catch (err) {
    console.error(err.message);
  }
});

sample_testRouter.post(
  "/uploadImage",
  upload.single("images"),
  async (req, res, next) => {
    try {
      const { images } = req.body;
       const insertImage = await sql`INSERT INTO uploadimage (
            images ) VALUES (${req.file.filename}) RETURNING *`;
       res.json(insertImage);
    } catch (err) {
      console.error(err.message);
    }
    // console.log(req.file);
  }
);



  


export default sample_testRouter;
