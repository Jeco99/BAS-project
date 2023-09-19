import  express  from "express";
import sql from '../config/db.js';

const chartRouter = express.Router();

//   get -> get
//   put -> update
//   delete -> delete
//   post -> insert

// localhost:3001/chart/male
chartRouter.get("/male", async (req, res) => {
    try {
      const maleData = await sql`select  
      count(case when sex='Male' then 1 end) as male_cnt 
    FROM user_details;`;
      res.json(maleData);
    } catch (err) {
      console.error(err.message);
    }
  });

  export default chartRouter;

