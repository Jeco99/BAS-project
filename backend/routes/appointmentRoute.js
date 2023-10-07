import express from "express";
import sql from "../config/db.js";

const appointmentRouter = express.Router();

appointmentRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filterAdminBrgy =
      await sql`SELECT barangay FROM user_details WHERE user_id = ${id}`;
    const appointmentData = await sql`SELECT 
    appoint.appointment_id AS appointment_id,
      CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
      appoint.appointment_time AS appointment_time,
      appoint.appointment_date AS appointment_date,
      appoint.request_type AS request_type,
      appoint.purpose AS purpose,
      DATE(appointment_time_date_created) AS appointment_date_created,
      TO_CHAR(appointment_time_date_created, 'HH:MI:SS') AS appointment_time_created,
      appoint.status AS status,
      users.barangay AS barangay, 
      users.user_id
    FROM appointment AS appoint 
    INNER JOIN user_details AS users 
    ON appoint.user_id =users.user_id
    WHERE barangay = ${filterAdminBrgy[0].barangay} 
          AND status = 'Pending'
    ORDER BY appointment_time_date_created;`;

    if (appointmentData.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(appointmentData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

appointmentRouter.post("/create/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      request_type,
      purpose,
      appointment_time,
      appointment_date,
      user_id,
    } = req.body;
    const newAppointment = await sql`INSERT INTO appointment (
          request_type, 
          purpose, 
          appointment_time,
          appointment_date, user_id ) VALUES (
            ${request_type}, ${purpose}, ${appointment_time}, ${appointment_date}, ${user_id}) RETURNING *`;

    if (newAppointment.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(201).json(newAppointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

appointmentRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatus =
      await sql`UPDATE appointment SET "status" = ${status}, "date_time_approval"= NOW() WHERE appointment_id = ${id} RETURNING *`;

    if (updateStatus.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(201).json(updateStatus[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default appointmentRouter;
