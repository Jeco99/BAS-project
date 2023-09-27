import express from "express";
import sql from "../config/db.js";

const appointmentRouter = express.Router();

appointmentRouter.get("/", async (req, res) => {
  try {
    const appointmentData = await sql`SELECT 
    appoint.appointment_id AS appointment_id,
    CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
    appoint.appointment_time AS appointment_time,
    appoint.appointment_date AS appointment_date,
    appoint.request_type AS request_type,
    appoint.purpose AS purpose,
    DATE(appointment_time_date_created) AS appointment_date_created,
    TO_CHAR(appointment_time_date_created, 'HH:MI:SS') AS appointment_time_created,
    appoint.status AS status 
  FROM appointment AS appoint 
  INNER JOIN user_details AS users 
  ON appoint.user_id =users.user_id
  WHERE status = 'Pending'
  ORDER BY appointment_time_date_created`;
    res.json(appointmentData);
  } catch (err) {
    console.error(err.message);
  }
});

appointmentRouter.post("/create", async (req, res) => {
  try {
    const { request_type, purpose, appointment_time, appointment_date } =
      req.body;
    // console.log(req.params);
    const newAppointment = await sql`INSERT INTO appointment (
          request_type, 
          purpose, 
          appointment_time,
          appointment_date ) VALUES (
            ${request_type}, ${purpose}, ${appointment_time}, ${appointment_date}) RETURNING *`;

    // res.json(newAppointment);
    res.status(200).json(newAppointment);
  } catch (err) {
    console.error(err.message);
  }
});

appointmentRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const selectAppointment =
      await sql`SELECT * FROM appointment WHERE appointment_id = ${id}`;
    res.json(selectAppointment);
  } catch (err) {
    console.error(err.message);
  }
});

appointmentRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatus =
      await sql`UPDATE appointment SET "status" = ${status} WHERE appointment_id = ${id}`;
    res.json(`Appointmnet id: ${id} was updated!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default appointmentRouter;
