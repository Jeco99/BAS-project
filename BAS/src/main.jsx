import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './assets/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LogIn from "./pages/LogIn.jsx";
import CreateaAccount from "./pages/user/userSignUp/createAccount";
import ErrorPage from "./pages/errorPage/errorpage";

import RootLayout from "./layouts/Layout";
import Root from "./layouts/Root";

import AppointmentDisplay from "./pages/user/appointmentDisplay/appointmentDisplay";
import History from "./pages/user/userHistory/history";
import UserDashboard from "./pages/user/userDashboard/userDashboard";

import Admin_Layout from "./layouts/admin_Layout";
import Admin_Root from "./layouts/adminRoot";

import BarangayDashboard from "./pages/barangay/barangayDashboard/barangayDashboard";

import Settings from "./pages/settings/setting";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>,
    errorElement: <ErrorPage />
  },
  {
    path:"/createaccount",
    element:<CreateaAccount />,
    errorElement: <ErrorPage />
  },
  {
    path:"/root",
    element:<Root />,
    errorElement: <ErrorPage />
  },
  {
    path:"/root",
    element: <RootLayout />, //create children based on the user sidebar
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <UserDashboard />,
      },
      {
        path: 'appointment',
        element: <AppointmentDisplay />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ]
  },
  //admin
  {
    path:"/admin",
    element:<Admin_Root />,
    errorElement: <ErrorPage />
  },
  {
    path:"/admin",
    element: <Admin_Layout />, //create children based on the user sidebar
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <BarangayDashboard />,
      },
      {
        path: 'report',
        element: <History />,//report
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
