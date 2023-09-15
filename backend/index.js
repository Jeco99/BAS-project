import express, { json } from "express";
import sql from "./config/db.js";
const app = express();
// const apiRoutes = require("./routes/routes");
import cors from "cors";

// app.use('/api', apiRoutes);

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(json());

app.get("/appointment", async (req, res) => {
  try {
    const appointmentData = await sql`SELECT 
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
    INNER JOIN user_details AS users ON appoint.appointment_id = users.user_id WHERE status = 'Pending';`;
    res.json(appointmentData);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/appointment/create", async (req, res) => {
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
    res.json(newAppointment);
    // res.status(200).send(newAppointment);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/createaccount", async (req, res) => {
  try {
    const userData = await sql`SELECT * FROM user_details`;
    res.json(userData);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/createaccount/create", async (req, res) => {
  try {
    const {
      user_image,
      user_name,
      email,
      password,
      first_name,
      middle_name,
      last_name,
      suffix,
      sex,
      date_of_birth,
      civil_status,
      contact_number,
      region,
      province,
      municipality,
      barangay,
      zone,
      street,
      zipcode,
      user_type,
    } = req.body;
    // console.log(req.params);
    const newUser = await sql`INSERT INTO user_details ( 
    "user_image", 
    "user_name",
    "email",
    "password", 
    "first_name", 
    "middle_name", 
    "last_name",
    "suffix", 
    "sex", 
    "date_of_birth",
    "civil_status", 
    "contact_number", 
    "region", 
    "province", 
    "municipality", 
    "barangay", 
    "zone", 
    "street", 
    "zipcode", 
    "user_type") VALUES(${user_image}, ${user_name}, ${email}, ${password}, ${first_name}, 
      ${middle_name}, ${last_name}, ${suffix}, ${sex}, ${date_of_birth}, ${civil_status}, 
      ${contact_number}, ${region},  ${province}, ${municipality}, ${barangay}, ${zone}, ${street}, ${zipcode}, ${user_type}) RETURNING *`;
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/post", async (req, res) => {
  try {
    const postData = await sql`SELECT * FROM post ORDER BY post_time_created`;
    res.json(postData);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/post/add", async (req, res) => {
  try {
    const { title, message } = req.body;

    const newPost = await sql`INSERT INTO post (
       "title", "description" ) VALUES (
        ${title}, ${message}) RETURNING *`;
    res.json(newPost);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/appointment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const selectAppointment = await sql`SELECT * FROM appointment WHERE appointment_id = ${id}`;
    res.json(selectAppointment);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/appointment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const  updateStatus =  await  sql`UPDATE appointment SET "status" = ${status} WHERE appointment_id = ${id}`;
    res.json(`Appointmnet id: ${id} was updated!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/history", async (req, res) => {
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

// app.get("/", async (req, res) => {
//   res.send("Hello There");
// });

// app.post("/users/create", async (req, res) => {
// 	try {
// 	const { firstname, lastname } =  req.body;
// 	console.log(req.params);
// 	const  newUser  = await  sql`INSERT INTO users ("first_name", "last_name") VALUES(${firstname}, ${lastname}) RETURNING *`;
// 	res.json(newUser);
// 	} catch (err) {
// 		console.error(err.message);
// 	}
// });

// app.get("/users", async (req, res) => {
//     try {
//       const  allUsers  =  await  sql`SELECT * FROM users`;
//       res.json(allUsers);

//     } catch (err) {
//       console.error(err.message);
//     }
//   });

//   app.get("/users/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const  selectUser  =  await  sql`SELECT * FROM users WHERE user_id = ${id}`;
//       res.json(selectUser);
//     } catch (err) {
//       console.error(err.message);
//     }
//   });

// app.put("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { firstname, lastname } = req.body;
//     const  updateUser  =  await  sql`UPDATE users SET "first_name" = ${firstname}, "last_name" = ${lastname} WHERE user_id = ${id}`;
//     res.json(`User id: ${id} was updated!`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

//   app.delete("/users/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const  deleteUser  =  await  sql`DELETE FROM users WHERE user_id = ${id}`;
//       res.json("User was deleted!");
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
