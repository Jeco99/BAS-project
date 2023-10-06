import express from "express";
import sql from "../config/db.js";

const historyRouter = express.Router();

historyRouter.get("/admin/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filterAdminBrgy =
      await sql`SELECT barangay FROM user_details WHERE user_id = ${id}`;
    const completeStatusData = await sql`SELECT 
      appoint.appointment_id AS appointment_id,
      CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
      appoint.appointment_time AS appointment_time,
      appoint.appointment_date AS appointment_date,
      appoint.request_type AS request_type,
      appoint.purpose AS purpose,
      appoint.date_time_approval AS date_time_approval,
      DATE( date_time_approval) AS approval_date_created,
      TO_CHAR( date_time_approval, 'HH:MI:SS') AS approval_time_created,
      appoint.status AS status,
      users.barangay AS barangay 
    FROM appointment AS appoint 
    INNER JOIN user_details AS users 
    ON appoint.user_id =users.user_id
    WHERE barangay = ${filterAdminBrgy[0].barangay}
    AND status IN ('Completed', 'Incomplete')
    ORDER BY date_time_approval DESC`;
    if (completeStatusData.length == 0) {
      return res.status(404).send("id doesn't exists");
    }
    res.status(200).json(completeStatusData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

historyRouter.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filterAdminBrgy =
      await sql`SELECT barangay FROM user_details WHERE user_id = ${id}`;
    const completeStatusData = await sql`SELECT 
    appoint.appointment_id AS appointment_id,
    CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
    appoint.appointment_time AS appointment_time,
    appoint.appointment_date AS appointment_date,
    appoint.request_type AS request_type,
    appoint.purpose AS purpose,
    appoint.date_time_approval AS date_time_approval,
    DATE( date_time_approval) AS approval_date_created,
    TO_CHAR( date_time_approval, 'HH:MI:SS') AS approval_time_created,
    appoint.status AS status,
    users.user_id,
    users.barangay AS barangay
  FROM appointment AS appoint 
  INNER JOIN user_details AS users 
  ON appoint.user_id =users.user_id
  WHERE barangay = ${filterAdminBrgy[0].barangay}
  AND users.user_id = ${id}
  AND status IN ('Completed', 'Incomplete')
  ORDER BY date_time_approval DESC`;
  if (completeStatusData.length == 0) {
    return res.status(404).send("id doesn't exists");
  }
    res.status(200).json(completeStatusData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


export default historyRouter;
