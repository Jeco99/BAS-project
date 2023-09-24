import express from "express";
import cors from "cors";
import postRouter from "./routes/postRoute.js";
import createAccountRouter from "./routes/createaccountRoute.js";
import historyRouter from "./routes/historyRoute.js";
import appointmentRouter from "./routes/appointmentRoute.js";
import logInRouter from "./routes/loginRoute.js";
import userDetails_Router from "./routes/userdetails.js";
import sample_testRouter from "./routes/sample_test.js";
import chartRouter from "./routes/chart.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());
app.use("/static", express.static("static"))

app.use('/appointment', appointmentRouter);
app.use('/post', postRouter);
app.use('/history', historyRouter);
app.use('/createaccount', createAccountRouter);
app.use('/login', logInRouter);
app.use('/root', userDetails_Router);
app.use('/sampletest', sample_testRouter)
app.use('/chart', chartRouter);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
