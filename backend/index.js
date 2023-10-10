import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRouter from "./routes/postRoute.js";
import createAccountRouter from "./routes/createaccountRoute.js";
import historyRouter from "./routes/historyRoute.js";
import appointmentRouter from "./routes/appointmentRoute.js";
import logInRouter from "./routes/loginRoute.js";
import userDetails_Router from "./routes/userdetails.js";
import chartRouter from "./routes/chart.js";
import logOutRouter from "./routes/logoutRoute.js";
import authenticated from "./middlewares/authenticated.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/static", express.static("static"))
app.use('/createaccount', createAccountRouter);
app.use('/login', logInRouter);
app.use(authenticated);

app.use('/appointment', appointmentRouter);
app.use('/post', postRouter);
app.use('/history', historyRouter);
app.use('/root', userDetails_Router);
app.use('/chart', chartRouter);
app.use('/logout', logOutRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
