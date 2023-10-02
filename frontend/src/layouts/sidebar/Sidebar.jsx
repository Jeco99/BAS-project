import { HiUserCircle } from "react-icons/hi";
import {
  MdOutlineHistoryEdu,
  MdSpaceDashboard,
  MdSettings,
  MdCalendarMonth,
  MdAssignment,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Sidebar.css";


const Sidebar = ({
  open,
  setOpen,
  sidebarRef,
  Nav_animation,
  isTabletMid,
  isLaptop,
  data,
}) => {
  console.log(data);
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
          <div className="m-3">
            <img
              className="image-holder-sidebar"
              srcSet={
                data.user_image == "" ? (
                  <HiUserCircle
                    size={isLaptop ? 210 : isTabletMid ? 150 : 300}
                    color="black"
                  />
                ) : (
                  "http://localhost:3001/static/" + data.user_image
                )
              }
              alt="user profile"
            />
          </div>

          <h2 className="text-center m-4 text-xl">
            {data.user_type == "resident"
              ? data.first_name + " " + data.middle_name + " " + data.last_name
              : ""}
          </h2>

          <ul className="whitespace-pre px-2.5 text-[0.9rem] flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"dashboard"} className="link sidebar-button">
                <MdSpaceDashboard size={35} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to={data.user_type == "admin" ? "report" : "appointment"}
                className="link sidebar-button"
              >
                {data.user_type == "admin" ? (
                  <MdCalendarMonth size={35} className="min-w-max" />
                ) : (
                  <MdAssignment size={35} className="min-w-max" />
                )}

                {data.user_type == "admin" ? "Report" : "Appointment"}
              </NavLink>
            </li>

            <li>
              <NavLink
                to={data.user_type == "admin" ? "adminhistory" : "userhistory"}
                className="link sidebar-button"
              >
                <MdOutlineHistoryEdu size={35} className="min-w-max" />
                History
              </NavLink>
            </li>
            <li>
              <NavLink to={data.user_type == "admin" ? "adminsetting" : "usersettings"} className="link sidebar-button">
                <MdSettings size={35} className="min-w-max" />
                Account Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
