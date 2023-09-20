import express from "express";
import sql from "../config/db.js";

const chartRouter = express.Router();

chartRouter.get("/sex", async (req, res) => {
  try {
    const maleData = await sql`select  
      count(case when sex='Male' then 1 end) as male_cnt,
      count(case when sex='Female' then 1 end) as female_cnt  
    FROM user_details;`;
    res.json(maleData);
  } catch (err) {
    console.error(err.message);
  }
});

chartRouter.get("/documents", async (req, res) => {
  try {
    const brgyDocument = await sql`select  
      count(case when request_type='barangay certificate' then 1 end) as brgycertificate_cnt, 
      count(case when request_type='barangay clearance' then 1 end) as brgyclearance_cnt,
      count(case when request_type='barangay permit' then 1 end) as brgypermit_cnt 
    FROM appointment;`;
    res.json(brgyDocument);
  } catch (err) {
    console.error(err.message);
  }
});


export default chartRouter;
