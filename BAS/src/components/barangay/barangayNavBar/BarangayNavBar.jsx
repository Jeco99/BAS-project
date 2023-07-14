'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import { IconButton } from "@material-tailwind/react";
import logoImage from '/src/assets/images/BAS-Logo-1.2.png'
import logoImage2 from '/src/assets/images/CodeVerts-logo-2.png'
import '/src/components/barangay/barangayNavBar/BarangayNavBar.css'
import { BellIcon } from "@heroicons/react/24/solid";

export default function BrgyNavbar() {
  return (
    <Navbar
      fluid
      rounded
      style={{ backgroundColor: '#407C87', caretColor: 'transparent'}}
    >
      <Navbar.Brand href="">
        <div className="flex items-center">
          <img
            alt="BAS Logo"
            className="navbar-logo mr-3 h-12"
            src={logoImage}
          />
          <span >  
            Barangay Appointment System
          </span>
        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <IconButton variant="text">
          <BellIcon className="bell-icon h-6 w-6"/>
        </IconButton>
        <span className="flex items-center justify-center mr-3">
          Welcome,<span className='font-bold ml-1'>Brgy. Poblacion West!</span>
        </span>
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={logoImage2} rounded/> }
        >
          <Dropdown.Header>
            <span className="truncate text-sm font-medium">
              brgypoblacionwest@sample.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}