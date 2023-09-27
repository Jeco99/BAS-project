import express from "express";
import sql from "../config/db.js";

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  try {
    const postData = await sql`SELECT *,
      DATE( post_time_date_created) AS post_date_created,
      TO_CHAR( post_time_date_created, 'HH:MI:SS') AS post_time_created
    FROM post ORDER BY post_time_date_created`;
    res.json(postData);
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.post("/add", async (req, res) => {
  try {
    const { title, message } = req.body;

    const newPost = await sql`INSERT INTO post (
         "title", "description" ) VALUES (
          ${title}, ${message}) RETURNING *`;
    res.json(newPost);
  } catch (err) {
    console.error(err.message);
  }
});

export default postRouter;
