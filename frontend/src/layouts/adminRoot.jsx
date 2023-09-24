import { useEffect, useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import NavbarComponent from "./navbar/Navbar";
import Admin_Sidebar from "./sidebar/admin_Sidebar";

import BarangayDashboard from "../pages/barangay/barangayDashboard/barangayDashboard";

function Admin_Root() {
  const isTabletMid = useMediaQuery({ query: "(max-width: 767px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "15rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : isLaptop
    ? {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
      }
    : {
        open: {
          width: "20rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <nav className="">
        <NavbarComponent setOpen={setOpen} />
      </nav>
      <div className="flex">
        <Admin_Sidebar
          open={open}
          setOpen={setOpen}
          sidebarRef={sidebarRef}
          Nav_animation={Nav_animation}
          isTabletMid={isTabletMid}
          isLaptop={isLaptop}
        />

        <main className="w-full calcTop calcLeft">
          <BarangayDashboard />
        </main>
      </div>
    </div>
  );
}

export default Admin_Root;
