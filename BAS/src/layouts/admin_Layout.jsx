import Admin_Sidebar from "./sidebar/admin_Sidebar";
import NavbarComponent from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Admin_Layout() {
  return (
    <div>
      <nav>
        <NavbarComponent />
      </nav>
      <div className="flex">
        <aside className="h-full flex">
          <Admin_Sidebar />
        </aside>
        <main className="w-full m-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Admin_Layout;
