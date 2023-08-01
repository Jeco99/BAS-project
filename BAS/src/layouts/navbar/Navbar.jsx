import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { BellIcon } from "@heroicons/react/24/solid";
import logoImage from '/src/assets/images/BAS-Logo-1.2.png';
import logoImage2 from '/src/assets/images/CodeVerts-logo-2.png';
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
// import './Navbar.css';

export default function NavbarComponent({setOpen}) {
  return (
      <Navbar fluid className="bg-beetleGreen p-2 text-sm sm:text-xl w-full ">
      <div className="md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
        <Navbar.Brand href="/root">       
            <div className="flex ">
              <img alt="BAS Logo" className='w-14 sm:w-24' src={logoImage} />
              <span className='self-center text-xl lg:text-3xl font-semibold whitespace-nowrap ml-5 hidden sm:block'>Barangay Appointment System</span>
            </div>
        </Navbar.Brand>
        <div className="flex items-center md:order-2">
          <BellIcon className="mr-1 h-6 w-6" />
          <div className="flex flex-col sm:flex-row">
        <p>Welcome, {' '} </p><span>John</span> </div>
          <Dropdown inline label={<Avatar alt="User settings" img={logoImage2} rounded />}>
            <Dropdown.Header>
              <span className="truncate text-sm font-medium">username@sample.com</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link
                to={"/"}
              >
                Sign out
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
  );
}