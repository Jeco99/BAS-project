import express from "express";
import sql from "../config/db.js";

const userDetails_Router = express.Router();

userDetails_Router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const selectedUser_details = await sql `SELECT * FROM user_details WHERE user_id=${id}`;
        res.json(selectedUser_details[0]);
      } catch (err) {
        console.error(err.message);
      }
})

export default userDetails_Router;