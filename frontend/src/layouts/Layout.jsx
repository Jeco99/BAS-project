import Sidebar from "./sidebar/Sidebar";
import NavbarComponent from "./navbar/Navbar";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Layout() {
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
      <NavbarComponent setOpen={setOpen}/>
      </nav>
      <div className="flex">
        
        <Sidebar open={open} setOpen={setOpen} sidebarRef={sidebarRef} Nav_animation={Nav_animation} isTabletMid={isTabletMid}/> 
        
        <main className="w-full calcMain leftCol">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;