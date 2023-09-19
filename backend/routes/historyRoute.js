import  express  from "express";
import sql from '../config/db.js';

const historyRouter = express.Router();

historyRouter.get("/", async (req, res) => {
    try {
      const completeStatusData = await sql`SELECT 
      appoint.appointment_id AS appointment_id,
      CONCAT(users.first_name, ' ',SUBSTRING(users.middle_name,1,1),'.',' ', users.last_name) AS Fullname,
      appoint.appointment_time AS appointment_time,
      appoint.appointment_date AS appointment_date,
      appoint.request_type AS request_type,
      appoint.purpose AS purpose,
      appoint.appointment_time_created AS appointment_time_created,
      appoint.appointment_date_created AS appointment_date_created,
      appoint.status AS status
    FROM appointment AS appoint
      INNER JOIN user_details AS users ON appoint.appointment_id = users.user_id
      WHERE status IN ('Completed', 'Incomplete')
    ORDER BY appointment_time_created;`;
      res.json(completeStatusData);
    } catch (err) {
      console.error(err.message);
    }
  });

  export default historyRouter;