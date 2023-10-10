import express from "express";
import sql from "../config/db.js";

const logOutRouter = express.Router();

logOutRouter.post("/",(req, res) => {
    return res.status(204).clearCookie("token", {httpOnly:true} ).send("token has reset");
})

export default logOutRouter;