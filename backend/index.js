const express = require("express");
const sql = require("./config/db");
const app = express();
const apiRoutes = require("./routes/routes");
const cors = require("cors");

// app.use('/api', apiRoutes);

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello There");
});

app.post("/users/create", async (req, res) => {
	try {
	const { firstname, lastname } =  req.body;
	console.log(req.params);
	const  newUser  = await  sql`INSERT INTO users ("first_name", "last_name") VALUES(${firstname}, ${lastname}) RETURNING *`;
	res.json(newUser);
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/users", async (req, res) => {
    try {
      const  allUsers  =  await  sql`SELECT * FROM users`;
      res.json(allUsers);
      
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const  selectUser  =  await  sql`SELECT * FROM users WHERE user_id = ${id}`;
      res.json(selectUser);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.put("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname } = req.body;
      const  updateUser  =  await  sql`UPDATE users SET "first_name" = ${firstname}, "last_name" = ${lastname} WHERE user_id = ${id}`;
      res.json(`User id: ${id} was updated!`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

  app.delete("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const  deleteUser  =  await  sql`DELETE FROM users WHERE user_id = ${id}`;
      res.json("User was deleted!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

// app.post("/createaccount", async (req, res) => {
//   try {
//     const {
//       user_image,
//       user_name,
//       user_email,
//       user_password,
//       user_firstname,
//       user_middlename,
//       user_lastname,
//       user_suffix,
//       user_sex,
//       user_date_of_birth,
//       user_civil_status,
//       user_contact_number,
//       user_region,
//       user_province,
//       user_municipality,
//       user_barangay,
//       user_zone,
//       user_street,
//       user_type,
//     } = req.body;
//     console.log(req.params);
//     const newUser = await sql`INSERT INTO users (
//         "user_image",
//         "user_name",
//         "user_email",
//         "user_password",
//         "user_firstname",
//         "user_middlename",
//         "user_lastname",
//         "user_suffix",
//         "user_sex",
//         "user_date_of_birth",
//         "user_civil_status",
//         "user_contact_number",
//         "user_region",
//         "user_province",
//         "user_municipality",
//         "user_barangay",
//         "user_zone",
//         "user_street",
//         "user_type"
//       ) VALUES( 
//         ${user_image},
//         ${user_name},
//         ${user_email},
//         ${user_password},
//         ${user_firstname},
//         ${user_middlename},
//         ${user_lastname},
//         ${user_suffix},
//         ${user_sex},
//         ${user_date_of_birth},
//         ${user_civil_status},
//         ${user_contact_number},
//         ${user_region},
//         ${user_province},
//         ${user_municipality},
//         ${user_barangay},
//         ${user_zone},
//         ${user_street},
//         ${user_type}) RETURNING *`;
//     res.json(newUser);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

