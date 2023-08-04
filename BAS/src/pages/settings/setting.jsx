'use client';

import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

import UpdateAccountDetails from "./updateAccountForm";
import UpdatePersonalDetails from "./updatePersonalForm";

export default function Settings() {
  return (
    <div className='marginMain'>
    <h1 className='pageHeader'> Update Profile
    </h1>
   
    <Tabs.Group
      aria-label="Tabs with icons"
      style="underline"
    >
      <Tabs.Item
        active
        icon={HiUserCircle}
        title="Account Details"
      >
       <UpdateAccountDetails />
      </Tabs.Item>
      <Tabs.Item
        icon={MdDashboard}
        title="Personal Details"
      >
       <UpdatePersonalDetails />
      </Tabs.Item>
    </Tabs.Group>
    </div>
  )
}


