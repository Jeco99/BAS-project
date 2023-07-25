import Sidebar from "./sidebar/Sidebar"
import NavbarComponent from "./navbar/Navbar";

// eslint-disable-next-line react/prop-types
function RootLayout() {
  return (
    <div className="w-full fixed">
        <NavbarComponent />
        <Sidebar />
        {/* <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main> */}
    </div>
  );
}

export default RootLayout;