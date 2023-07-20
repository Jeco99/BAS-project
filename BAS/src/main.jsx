import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './assets/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import LogIn from "./LogIn.jsx";
import AccountDetails from "./components/user/userSignUp/accountDetails";
import BarangayDashboard from "./components/barangay/barangayDashboard/barangayDashboard";
import UserDashboard from "./components/user/userDashboard/userDashboard";

import ErrorPage from "./errorPage.jsx/errorpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>,
    errorElement: <ErrorPage />
  },
  {
    path:"/createaccount",
    element:<AccountDetails />,
    errorElement: <ErrorPage />
  },
  {
    path:'/barangaydashboard',
    element: <BarangayDashboard/>, //create children based on the barangay sidebar
    errorElement: <ErrorPage />
  },
  {
    path:'/userdashboard',
    element: <UserDashboard/>, //create children based on the user sidebar
    errorElement: <ErrorPage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
