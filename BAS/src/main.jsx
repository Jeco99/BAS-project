import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './assets/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import LogIn from "./LogIn.jsx";
// import AccountDetails from "./components/user/userSignUp/accountDetails";
import BarangayDashboard from "./components/barangay/barangayDashboard/barangayDashboard";
// import UserDashboard from "./components/user/userDashboard/userDashboard";
import CreateaAccount from "./components/user/userSignUp/createAccount";
import RootLayout from "./layouts/Layout";
// import AppointmentDisplay from "./components/user/appointmentDisplay/appointmentDisplay";
import AppointmentDisplay from "./components/user/appointmentDisplay/appointmentDisplay";


import DataValidationExample from "./sample_LogIn";
import YourFormComponent from "./sample_nextButton";

import Settings from "./components/settings/settings";
import ErrorPage from "./errorPage/errorpage";


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
    path:'/barangaydashboard',
    element: <BarangayDashboard/>, //create children based on the barangay sidebar
    errorElement: <ErrorPage />
  },
  {
    path:'/dashboard',
    element: <RootLayout />, //create children based on the user sidebar
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: 'main/appointment',
    //     element: <AppointmentDisplay />,
    //   },
    // ]
  },
  {
    path:'/appointment',
    element: <AppointmentDisplay/>, //create children based on the user sidebar
    errorElement: <ErrorPage />
  },
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
