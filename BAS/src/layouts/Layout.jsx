import Sidebar from "./sidebar/Sidebar"
import NavbarComponent from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RootLayout() {
  return (
    <div className="w-full">
      <nav><NavbarComponent /></nav>
        <aside className="h-full flex">
          <Sidebar />
          <main className="w-full m-10"><Outlet /></main>
        </aside>
    </div>
  );
}

export default RootLayout;