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
      appoint.date_time_approval AS date_time_approval,
      DATE( date_time_approval) AS approval_date_created,
      TO_CHAR( date_time_approval, 'HH:MI:SS') AS approval_time_created,
      appoint.status AS status 
    FROM appointment AS appoint 
    INNER JOIN user_details AS users 
    ON appoint.user_id =users.user_id
    WHERE status IN ('Completed', 'Incomplete')
    ORDER BY date_time_approval`;
      res.json(completeStatusData);
    } catch (err) {
      console.error(err.message);
    }
  });

  export default historyRouter;