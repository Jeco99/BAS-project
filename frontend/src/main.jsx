import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogIn from "./pages/LogIn.jsx";
import CreateAccount from "./pages/user/userSignUp/createAccount";
import ErrorPage from "./pages/errorPage/errorpage";

import RootLayout from "./layouts/Layout";
import Root from "./layouts/Root";

import AppointmentDisplay from "./pages/user/appointmentDisplay/appointmentDisplay";
import History, { historyLoader } from "./pages/user/userHistory/history";
import UserDashboard from "./pages/user/userDashboard/userDashboard";
import Report, { appointmentLoader } from "./pages/user/reportPage/reportPage";
import UserSettings from "./pages/settings/user/UserSetting";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/createaccount",
    element:<CreateAccount />,
    errorElement:<ErrorPage />
  },
  {
    path: "/root/:id",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/root/:id",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "report",
        loader: appointmentLoader,
        element: <Report />,
      },
      {
        path: "appointment",
        element: <AppointmentDisplay />,
      },
      {
        path: "history",
        loader: historyLoader,
        element: <History />,
      },
      {
        path: "settings",
        element: <UserSettings />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
