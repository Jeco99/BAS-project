import { useEffect, useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Sidebar from "./sidebar/Sidebar";
import NavbarComponent from "./navbar/Navbar";
import UserDashboard from "../pages/user/userDashboard/userDashboard";
import { useParams } from "react-router-dom";
import useIsAuthenticated from "../hook/useIsAuthenticated";

const userDetails_Selected_Loader = async (id) => {
  const response = await fetch("http://localhost:3001/root/" + id,{
    credentials: "include",
  });
  const userDetails_data = await response.json();
  return userDetails_data;
};

function Root() {
  useIsAuthenticated();
  const isTabletMid = useMediaQuery({ query: "(max-width: 767px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function init() {
      const data = await userDetails_Selected_Loader(id);
      setData(data);
    }
    init();
  }, []);

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

  // console.log(data.user_image.split('.'));
  return (
    <div>
      <nav className="">
        <NavbarComponent setOpen={setOpen} data={data}/>
      </nav>
      <div className="flex">
        <Sidebar
          open={open}
          setOpen={setOpen}
          sidebarRef={sidebarRef}
          Nav_animation={Nav_animation}
          isTabletMid={isTabletMid}
          isLaptop={isLaptop}
          data={data}
        />

        <main className="w-full calcTop calcLeft">
          <UserDashboard />
        </main>
      </div>
    </div>
  );
}

export default Root;
