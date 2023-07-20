// import LogIn from "./LogIn";
// import AccountDetails from "./components/user/userSignUp/accountDetails";
import UserNavbar from "./components/user/userNavbar/navBar"
import UserSidebar from "./components/user/userSidebar/sideBar"
import LogIn from "./LogIn";
import BrgyNavbar from "./components/barangay/barangayNavBar/BarangayNavBar";
import BarangayDashboard from "./components/barangay/barangayDashboard/barangayDashboard";
import AccountDetails from "./components/user/userSignUp/accountDetails";
import BarangaySignUp from "./components/barangay/barangaySignup.jsx/BarangaySignUp";

function App() {
  return (
    <>

   {/* <UserNavbar />
   <UserSidebar /> */}
   <AccountDetails />
   <UserNavbar />
    <LogIn/>
    </>
  );
}

export default App;
