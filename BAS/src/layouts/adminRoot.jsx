import Admin_Sidebar from "./sidebar/admin_Sidebar";
import NavbarComponent from "./navbar/Navbar";
import BarangayDashboard from "../pages/barangay/barangayDashboard/barangayDashboard";

function Admin_Root() {
  return (
    <>
      <nav className="w-full relative"><NavbarComponent /></nav>
      <div className="flex">
          <aside>  <Admin_Sidebar />  </aside>
          <main className="w-full m-10"><BarangayDashboard/></main>
      </div>
      
       
    </>
  );
}

export default Admin_Root;