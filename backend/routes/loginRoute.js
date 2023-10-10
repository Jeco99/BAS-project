import express from "express";
import sql from "../config/db.js";
import bcrypt from "bcryptjs";
import generateToken from "../middlewares/auth.js";

const logInRouter = express.Router();

logInRouter.post("/", async (req, res) => {
  const { user_name, password } = req.body;

  try {
    const logInData =
      await sql`SELECT * FROM user_details WHERE user_name = ${user_name}`;

    const isPasswordMatch = await bcrypt.compare(
      password,
      logInData[0].password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    const token = generateToken(logInData[0]);
    console.log("-LogIn---------");
    console.log(token);
    console.log("----------");
    return res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .send(logInData[0]);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default logInRouter;
