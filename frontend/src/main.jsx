import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogIn from "./pages/LogIn.jsx";
import CreateAccount,{
   userLoader
} from "./pages/user/userSignUp/createAccount";
import ErrorPage from "./pages/errorPage/errorpage";

import RootLayout from "./layouts/Layout";
import Root from "./layouts/Root";

import AppointmentDisplay from "./pages/user/appointmentDisplay/appointmentDisplay";
import History,{ historyLoader } from "./pages/user/userHistory/history";
import UserDashboard from "./pages/user/userDashboard/userDashboard";

import Admin_Layout from "./layouts/admin_Layout";
import Admin_Root from "./layouts/adminRoot";

import BarangayDashboard from "./pages/barangay/barangayDashboard/barangayDashboard";
import Report, { appointmentLoader } from "./pages/user/reportPage/reportPage";

import AdminSettings from "./pages/settings/admin/AdminSetting";
import UserSettings from "./pages/settings/user/UserSetting";

import AppointmentDataDisplay, {
  loader as dataLoader,
} from "./pages/appoinementData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
    loader: userLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/root",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/root",
    element: <RootLayout />, //create children based on the user sidebar
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "appointment",
        element: <AppointmentDisplay /> 
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
  },
  //admin
  {
    path: "/admin",
    element: <Admin_Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Admin_Layout />, //create children based on the user sidebar
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <BarangayDashboard />
      },
      {
        path: "history",
        loader: historyLoader,
        element: <History />,
      },
      {
        path: "report",
        loader: appointmentLoader,
        element: <Report />, //report
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
    ],
  },
  {
    path:"/data",
    loader: dataLoader,
    element:<AppointmentDataDisplay />
    
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
