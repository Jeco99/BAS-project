import { motion } from "framer-motion";
import "./Sidebar.css";

// * React icons
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase, HiUserCircle } from "react-icons/hi";
// import { useMediaQuery } from "react-responsive";
// import { MdMenu } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import FooterCapstone from "../../components/footer/footer";

const Sidebar = ({  
  open,
  setOpen,
  sidebarRef,
  Nav_animation,
  isTabletMid,
}) => {
  // let isTabletMid = useMediaQuery({ query: "(max-width: 767px)" });
  // const [open, setOpen] = useState(isTabletMid ? false : true);
  // const sidebarRef = useRef();

  // useEffect(() => {
  //   if (isTabletMid) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // }, [isTabletMid]);

  // const Nav_animation = isTabletMid
  //   ? {
  //       open: {
  //         x: 0,
  //         width: "16rem",
  //         transition: {
  //           damping: 40,
  //         },
  //       },
  //       closed: {
  //         x: -250,
  //         width: 0,
  //         transition: {
  //           damping: 40,
  //           delay: 0.15,
  //         },
  //       },
  //     }
  //   : {
  //       open: {
  //         width: "20rem",
  //         transition: {
  //           damping: 40,
  //         },
  //       },
  //     };

  return (
    <aside className="h-screen bg-porcelain">
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
              size={250}
              color="black"
              className="items-center my-20"
            />
          </div>
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"dashboard"} className="link sidebar-button">
                <AiOutlineAppstore size={35} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"appointment"} className="link sidebar-button">
                <BsPerson size={35} className="min-w-max" />
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink to={"history"} className="link sidebar-button">
                <HiOutlineDatabase size={35} className="min-w-max" />
                History
              </NavLink>
            </li>
            <li>
              <NavLink to={"settings"} className="link sidebar-button">
                <RiSettingsLine size={35} className="min-w-max" />
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
