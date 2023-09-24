import express from "express";
import sql from "../config/db.js";

const logInRouter = express.Router();

logInRouter.post("/", async (req, res) => {
  const { user_name, password } = req.body;

  try {
    const logInData =
      await sql`SELECT * FROM user_details WHERE user_name = ${user_name}`;
    if (logInData.length === 0) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    if(password != logInData[0].password){
        return res.status(401).json({message: "Invalid credentials"});
    }
    console.log(logInData)
    res
      .status(200)
      .send(logInData[0]);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default logInRouter;
