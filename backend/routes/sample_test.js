import express from "express";
import sql from "../config/db.js";
import multer from "multer";

const sample_testRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

sample_testRouter.get("/images", async (req, res) => {
  try {
    const imageData = await sql`SELECT * FROM uploadimage`;
    res.json(imageData);
  } catch (err) {
    console.error(err.message);
  }
});

sample_testRouter.post(
  "/uploadImage",
  upload.single("avatar"),
  async (req, res, next) => {
    try {
      const { images } = req.body;
      const insertImage = await sql`INSERT INTO uploadimage (
            images ) VALUES (${images}) RETURNING *`;
      res.json(insertImage);
      console.log(images);
      console.log(insertImage);
    } catch (err) {
      console.error(err.message);
    }
  }
);



  


export default sample_testRouter;
