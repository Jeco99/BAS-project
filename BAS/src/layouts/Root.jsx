import Sidebar from "./sidebar/Sidebar"
import NavbarComponent from "./navbar/Navbar";
// import BarangayDashboard from "../components/barangay/barangayDashboard/barangayDashboard";
import UserDashboard from "../components/user/userDashboard/userDashboard";

// eslint-disable-next-line react/prop-types
function Root() {
  return (
    <>
      <nav className="w-full relative"><NavbarComponent /></nav>
        <aside className="flex">
          <Sidebar />
          <main className="w-full m-10"><UserDashboard /></main>
        </aside>
    </>
  );
}

export default Root;