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
    if (postData.length == 0) {
      return res.status(404).send("id doesn't exists");
    }

    res.status(200).json(postData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

postRouter.post("/add/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, user_id } = req.body;
    const newPost = await sql`INSERT INTO post (
         "title", "description", "user_id") VALUES (
          ${title}, ${description}, ${user_id}) RETURNING *`;
    if (title == "" || description === "") {
      return res.status(404).send("Invalid Inputs");
    }
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
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
  FROM post WHERE post_id=${id}`;
    if (fetchPostIndividualData.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(fetchPostIndividualData[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

postRouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatePost =
      await sql`UPDATE post SET "title" = ${title}, "description"=${description} WHERE post_id = ${id} RETURNING *`;
    if (updatePost.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(updatePost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

postRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost =
      await sql`DELETE FROM post WHERE post_id = ${id} RETURNING *`;
    if (deletePost.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(deletePost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default postRouter;
