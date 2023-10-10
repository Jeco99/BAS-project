import express from "express";
import sql from "../config/db.js";

const nofiticationRouter = express.Router();

//user end
nofiticationRouter.get('/fetch/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const getNotif = await sql `SELECT n.notification_id, n.message, a.user_id,  u.user_image as image FROM notification as n 
        INNER JOIN appointment as a ON a.appointment_id = n.appointment_id
        INNER JOIN user_details as u ON u.user_id = a.user_id WHERE a.user_id = ${id};
     `
        res.status(200).json(getNotif);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
})

// notificationRouter.get('/getAppointment/')


//admin 

export default nofiticationRouter;