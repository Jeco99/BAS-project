import express from "express";
import sql from "../config/db.js";

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
chartRouter.get("/female", async (req, res) => {
  try {
    const femaleData = await sql`select  
      count(case when sex='Female' then 1 end) as female_cnt 
    FROM user_details;`;
    res.json(femaleData);
  } catch (err) {
    console.error(err.message);
  }
});
chartRouter.get("/brgycertificate", async (req, res) => {
  try {
    const brgyCertificateData = await sql`select  
      count(case when sex='Brgy Certificate' then 1 end) as brgycertificate_cnt 
    FROM user_details;`;
    res.json(brgyCertificateData);
  } catch (err) {
    console.error(err.message);
  }
});
chartRouter.get("/brgyclearance", async (req, res) => {
  try {
    const brgyClearanceData = await sql`select  
      count(case when sex='Brgy Clearance' then 1 end) as brgyclearance_cnt 
    FROM user_details;`;
    res.json(brgyClearanceData);
  } catch (err) {
    console.error(err.message);
  }
});
chartRouter.get("/bgrypermit", async (req, res) => {
  try {
    const bgryPermitData = await sql`select  
      count(case when sex='Bgry Permit' then 1 end) as bgrypermit_cnt 
    FROM user_details;`;
    res.json(bgryPermitData);
  } catch (err) {
    console.error(err.message);
  }
});

export default chartRouter;
