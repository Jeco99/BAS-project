import { motion } from "framer-motion";
import "./Sidebar.css";

// * React icons
import { HiUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdAssignment, MdSpaceDashboard, MdSettings } from "react-icons/md";

import FooterCapstone from "../../components/footer/footer";

const Admin_Sidebar = ({
  open,
  setOpen,
  sidebarRef,
  Nav_animation,
  isTabletMid,
}) => {
  return (
    <aside className="h-screen bg-primary">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen bg-accent ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="sidebar-content text-gray shadow-xl max-w-[25rem] w-[25rem] overflow-hidden md:relative fixed h-screen"
      >
        <div className="flex flex-col  h-full">
          <div
            className="user-logo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiUserCircle
              size={210}
              color="black"
              className="items-center my-5"
            />
          </div>
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"dashboard"} className="link sidebar-button">
                <MdSpaceDashboard size={35} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"report"} className="link sidebar-button">
                <MdAssignment size={35} className="min-w-max" />
                Report
              </NavLink>
            </li>
            <li>
              <NavLink to={"settings"} className="link sidebar-button">
                <MdSettings size={35} className="min-w-max" />
                Account Settings
              </NavLink>
            </li>
          </ul>

          <FooterCapstone />
        </div>
      </motion.div>
    </aside>
  );
};

export default Admin_Sidebar;
