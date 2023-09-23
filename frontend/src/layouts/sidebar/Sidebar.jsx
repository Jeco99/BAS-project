import { motion } from "framer-motion";
import "./Sidebar.css";

// * React icons
import { HiUserCircle } from "react-icons/hi";
// import { useMediaQuery } from "react-responsive";
import { MdOutlineHistoryEdu, MdSpaceDashboard, MdSettings, MdCalendarMonth } from "react-icons/md";
import { NavLink } from "react-router-dom";

import FooterCapstone from "../../components/footer/footer";

const Sidebar = ({  
  open,
  setOpen,
  sidebarRef,
  Nav_animation,
  isTabletMid,
  isLaptop
}) => {
  return (
    <aside className="fixed calcTop z-50">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="sidebar-content relative
        text-gray shadow-xl max-w-[30rem] w-[30rem] overflow-hidden md:relative fixed h-screen"
      >
        <div className="flex flex-col h-full">

        
            <HiUserCircle
              size={isLaptop ? 210 : isTabletMid ? 150 : 300}
              color="black"
              className="m-auto"
            />
       
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-10 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"dashboard"} className="link sidebar-button">
                <MdSpaceDashboard size={35} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"appointment"} className="link sidebar-button">
                <MdCalendarMonth size={35} className="min-w-max" />
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink to={"history"} className="link sidebar-button">
                <MdOutlineHistoryEdu size={35} className="min-w-max" />
                History
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

export default Sidebar;