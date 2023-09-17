import express, { json, response } from "express";
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
    const appointmentData = await sql`SELECT * FROM appointment`;
    res.json(appointmentData);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/appointment/create", async (req, res) => {
  try {
    const {
      request_type,
      purpose,
      appointment_time,
      appointment_date
    } = req.body;
    console.log(req.params);
    const newAppointment =
      await sql`INSERT INTO appointment (
        "request_type", 
        "purpose", 
        "appointment_time",
        "appointment_date" ) VALUES (
          ${request_type}, ${purpose}, ${appointment_time}, ${appointment_date}) RETURNING *`;
    // res.json(newAppointment);
    console.log(response.status());
    res.status(200).json(newAppointment);
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

app.get("/data", async (req, res) => {
  try {
    const userData = await sql`SELECT * FROM users`;
    res.json(userData);
  } catch (err) {
    console.error(err.message);
  }
})

app.post("/data/create", async (req, res) => {
  try {
    const {
     first_name,
     last_name
    } = req.body;
    console.log(req.params);
    const newAppointment =
      await sql`INSERT INTO users (
      "first_name",  
        "last_name" ) VALUES (
          ${first_name}, ${last_name}) RETURNING *`;
    res.json(newAppointment);
  } catch (err) {
    console.error(err.message);
  }
})




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

//   app.put("/users/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { firstname, lastname } = req.body;
//       const  updateUser  =  await  sql`UPDATE users SET "first_name" = ${firstname}, "last_name" = ${lastname} WHERE user_id = ${id}`;
//       res.json(`User id: ${id} was updated!`);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   });

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
