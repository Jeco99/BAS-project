import express from "express";
import sql from "../config/db.js";

const postRouter = express.Router();

postRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filterAdminBrgy =
      await sql`SELECT barangay FROM user_details WHERE user_id = ${id}`;
    const postData = await sql`SELECT 
    post.title AS title,
    post.description AS description,
    DATE( post_time_date_created) AS post_date_created,
    TO_CHAR( post_time_date_created, 'HH:MI:SS') AS post_time_created,
    users.barangay AS barangay
  FROM post 
  INNER JOIN user_details AS users ON post.user_id = users.user_id
  WHERE barangay = ${filterAdminBrgy[0].barangay}
  ORDER BY post_time_date_created DESC`;
    res.json(postData);
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.post("/add/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, message } = req.body;
    const newPost = await sql`INSERT INTO post (
         "title", "description", "user_id") VALUES (
          ${title}, ${message}, ${id}) RETURNING *`;
    res.json(newPost);
  } catch (err) {
    console.error(err.message);
  }
});

// TODO: edit post 
// postRouter.put("/update/:id", async(req, res) => {
//   try{
//     const { id } = req.params;
//     const {title, message} =req.body;
//     const updatePost = await sql `UPDATE post SET "title" = ${title}, "description"=${message} WHERE post_id = ${id}`;
//     res.json(updatePost);
//     console.log(updatePost);
//     console.log(id);
//   } catch(err){
//     console.error(err.message);
//   }
// })

export default postRouter;
