import NavbarComponent from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import UserDashboard from "../pages/user/userDashboard/userDashboard";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Root() {
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
    <>
      <nav className="w-full relative"><NavbarComponent setOpen={setOpen}/></nav>
      <div className="flex">
          <aside className="h-screen">  <Sidebar open={open} setOpen={setOpen} sidebarRef={sidebarRef} Nav_animation={Nav_animation} isTabletMid={isTabletMid}/>  </aside>
          <main className="w-full m-10 leftCol"><UserDashboard/></main>
      </div>
      
       
    </>
  );
}

export default Root;