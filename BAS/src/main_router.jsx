import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './assets/index.css'

import AccountDetails from "./components/user/userSignUp/accountDetails";
import UserDashboard from "./components/user/userDashboard/userDashboard";
import LogIn from "./LogIn.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>
  },
  {
    path:'/',
    element: <AccountDetails />,
    children: [
      {
        path:'/dashboard',
        element: <UserDashboard />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
