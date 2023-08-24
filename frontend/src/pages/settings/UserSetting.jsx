"use client";

import { Tabs } from "flowbite-react";
import { MdAccountBox } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";

import UpdateUserAccount from "./updateUserAccount";
import UpdatePersonalAccount from "./updateUserPersonal";

// TODO: can't make one row in react tab when small mobile view

export default function UserSettings() {
  return (
    <div className="main-container">
      <h1 className="main-title">Update Setting</h1>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item active icon={MdAccountBox} title="Account Details"  className="">
          <UpdateUserAccount />
        </Tabs.Item>
        <Tabs.Item icon={BsPersonVcardFill} title="Personal Details" className="">
          <UpdatePersonalAccount />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
