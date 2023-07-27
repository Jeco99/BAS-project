import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './assets/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LogIn from "./LogIn.jsx";
import CreateaAccount from "./components/user/userSignUp/createAccount";
import ErrorPage from "./errorPage/errorpage";

import AppointmentDisplay from "./components/user/appointmentDisplay/appointmentDisplay";
// import BarangayDashboard from "./components/barangay/barangayDashboard/barangayDashboard";
import History from "./components/user/userHistory/history";
import Settings from "./components/settings/settings";
import RootLayout from "./layouts/Layout";
import Root from "./layouts/Root";
import UserDashboard from "./components/user/userDashboard/userDashboard";


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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
