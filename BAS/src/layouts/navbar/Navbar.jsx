import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { BellIcon } from "@heroicons/react/24/solid";
import logoImage from '/src/assets/images/BAS-Logo-1.2.png';
import logoImage2 from '/src/assets/images/CodeVerts-logo-2.png';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function NavbarComponent() {
  return (
    <div className='flex-1 changeborder'>
      <Navbar fluid style={{ backgroundColor: '#407C87', caretColor: 'transparent' }}>
        <Navbar.Brand href="">
          <div className="flex items-center">
            <img alt="BAS Logo" className="navbar-logo mr-3 h-12" src={logoImage} />
            <span className="logo-name">Barangay Appointment System</span>
          </div>
        </Navbar.Brand>
        <div className="flex items-center md:order-2">
          <BellIcon className="bell-icon mr-1 h-6 w-6" />
          <span className="flex items-center justify-center mr-3 welcome-note">
            Welcome,<span className="font-bold ml-1">User Name!</span>
          </span>
          <Dropdown inline label={<Avatar alt="User settings" img={logoImage2} rounded />}>
            <Dropdown.Header>
              <span className="dropdown-items truncate text-sm font-medium">username@sample.com</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link
                to={"/"}
                className="dropdown-items button-link"
              >
                Sign out
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
}