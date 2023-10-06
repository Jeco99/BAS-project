import express from "express";
import sql from "../config/db.js";

const postRouter = express.Router();

postRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filterAdminBrgy =
      await sql`SELECT barangay FROM user_details WHERE user_id = ${id}`;
    const postData = await sql`SELECT
    post.post_id AS post_id, 
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
    const { title, description, user_id } = req.body;
    const newPost = await sql`INSERT INTO post (
         "title", "description", "user_id") VALUES (
          ${title}, ${description}, ${user_id}) RETURNING *`;
    res.json(newPost);
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.get("/fetch/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fetchPostIndividualData = await sql`SELECT
    post.title AS title,
    post.description AS description,
    DATE( post_time_date_created) AS post_date_created,
    TO_CHAR( post_time_date_created, 'HH:MI:SS') AS post_time_created
  FROM post WHERE post_id=${id}`
    res.json(fetchPostIndividualData);
  } catch (err) {
    console.error(err.message);
  }
});

postRouter.put("/update/:id", async(req, res) => {
  try{
    const { id } = req.params;
    const {title, description, user_id} =req.body;
    console.log(id)
    console.log(title)
    console.log(description)
    console.log(user_id)
    await sql `UPDATE post SET "title" = ${title}, "description"=${description}, "user_id"=${user_id} WHERE post_id = ${id}`;
    res.send({'message':'Successfully Update'});
  } catch(err){
    console.error(err.message);
  }
})

postRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await  sql`DELETE FROM post WHERE post_id = ${id}`;
    res.json("User was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default postRouter;
