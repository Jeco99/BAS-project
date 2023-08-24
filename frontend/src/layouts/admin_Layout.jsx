import Admin_Sidebar from "./sidebar/admin_Sidebar";
import NavbarComponent from "./navbar/Navbar";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";



// eslint-disable-next-line react/prop-types
function Admin_Layout() {
  let isTabletMid = useMediaQuery({ query: "(max-width: 767px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();

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
          width: "16rem",
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
      <NavbarComponent setOpen={setOpen}/>
      </nav>
      <div className="flex">
        
        <Admin_Sidebar open={open} setOpen={setOpen} sidebarRef={sidebarRef} Nav_animation={Nav_animation} isTabletMid={isTabletMid}/> 
        
        <main className="w-full calcMain leftCol">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Admin_Layout;
