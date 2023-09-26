import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { BellIcon } from "@heroicons/react/24/solid";
import logoImage from "/src/assets/images/BAS-Logo-1.2.png";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavbarComponent({ setOpen, data }) {
  return (
    <Navbar
      fluid
      className="bg-beetleGreen fixed caret-transparent p-2 text-sm sm:text-xl w-full z-50"
    >
      <div className="md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
      <Navbar.Brand href={"/root/" + data.user_id}>
        <div className="flex ">
          <img alt="BAS Logo" className="w-14 sm:w-24" srcSet={logoImage} />
          <span className="logo-name hover:text-morningGlory self-center text-xl lg:text-3xl font-semibold whitespace-nowrap ml-5 hidden md:block">
            Barangay Appointment System
          </span>
        </div>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <BellIcon className="hover:text-morningGlory mr-2 h-6 w-6" />
        <div className="welcome-note flex items-center flex-col lg:flex-row">
          <p className="mr-1">Welcome,</p>
          <span className="mr-2">
            {data.user_type == "admin" ? data.barangay : data.first_name}
          </span>
        </div>
        <Dropdown
          className="dropdown-items"
          inline
          label={
            <Avatar
              alt="User settings"
              img={
                data.user_image == "" ? (
                  <HiUserCircle
                    size={isLaptop ? 210 : isTabletMid ? 150 : 300}
                    color="black"
                    className="m-auto"
                  />
                ) : (
                  "http://localhost:3001/static/" + data.user_image
                )
              }
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="truncate text-sm font-medium">{data.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>
            <NavLink to={"/"} className="link sidebar-button">
              Sign Out
            </NavLink>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
