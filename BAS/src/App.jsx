// import LogIn from "./LogIn";
// import BrgyNavbar from "./components/barangay/barangayNavBar/BarangayNavBar";
// import BarangayDashboard from "./components/barangay/barangayDashboard/barangayDashboard";
// import AccountDetails from "./components/user/userSignUp/accountDetails";
import UserNavbar from "./components/user/userNavbar/navBar"
import UserSidebar from "./components/user/userSidebar/sideBar"
import LogIn from "./LogIn";
import BrgyNavbar from "./components/barangay/barangayNavBar/BarangayNavBar";
import BarangayDashboard from "./components/barangay/barangayDashboard/barangayDashboard";
import AccountDetails from "./components/user/userSignUp/accountDetails";
import BarangayAddPost from "./components/barangay/barangayDashboard/addpost";
import BarangaySignUp from "./components/barangay/barangaySignup.jsx/BarangaySignUp";



function App() {
  return (
    <>
   <UserNavbar />
   <UserSidebar />
     {/* <LogIn />       */}
      {/* <BrgyNavbar/> */}
      {/* <BarangayDashboard /> */}
      {/* <AccountDetails /> */}
      <BarangaySignUp />
    </>
  );
}

export default App;
