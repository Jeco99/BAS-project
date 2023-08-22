"use client";

import { Tabs } from "flowbite-react";
import { MdAccountBox } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";

import UpdateUserAccount from "./updateUserAccount";
import UpdatePersonalAccount from "./updateUserPersonal";

export default function UserSettings() {
  return (
    <div className="main-container">
      <h1 className="main-title">Update Setting</h1>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item active icon={MdAccountBox} title="Account Details">
          <UpdateUserAccount />
        </Tabs.Item>
        <Tabs.Item icon={BsPersonVcardFill} title="Personal Details">
          <UpdatePersonalAccount />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
