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

import AppointmentDisplay from "./pages/user/appointmentDisplay/appointmentDisplay";
// import BarangayDashboard from "./components/barangay/barangayDashboard/barangayDashboard";
import History from "./pages/user/userHistory/history";
import Settings from "./pages/settings/settings";
import RootLayout from "./layouts/Layout";
import Root from "./layouts/Root";
import UserDashboard from "./pages/user/userDashboard/userDashboard";


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
  {
    path:'/setting',
    element: <Settings/>, //create children based on the user sidebar
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
