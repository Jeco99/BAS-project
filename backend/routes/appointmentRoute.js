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
      users.barangay AS barangay
    FROM appointment AS appoint 
    INNER JOIN user_details AS users 
    ON appoint.user_id =users.user_id
    WHERE barangay = ${filterAdminBrgy[0].barangay} 
          AND status = 'Pending'
    ORDER BY appointment_time_date_created;`;
    res.json(appointmentData);
  } catch (err) {
    console.error(err.message);
    console.log("Report ang may error");
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
    res.status(200).json(newAppointment);
  } catch (err) {
    console.error(err.message);
  }
});

// appointmentRouter.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const selectAppointment =
//       await sql`SELECT * FROM appointment WHERE appointment_id = ${id}`;
//     res.json(selectAppointment);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

appointmentRouter.put("/:id", async (req, res) => {
  const currentTimestamp = new Date();

  const year = currentTimestamp.getFullYear();
  const month = String(currentTimestamp.getMonth() + 1).padStart(2, "0");
  const day = String(currentTimestamp.getDate()).padStart(2, "0");
  const hours = String(currentTimestamp.getHours()).padStart(2, "0");
  const minutes = String(currentTimestamp.getMinutes()).padStart(2, "0");
  const seconds = String(currentTimestamp.getSeconds()).padStart(2, "0");

  const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  console.log(formattedTimestamp);

  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatus =
      await sql`UPDATE appointment SET "status" = ${status}, "date_time_approval"=${formattedTimestamp} WHERE appointment_id = ${id}`;
    res.json(updateStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default appointmentRouter;
