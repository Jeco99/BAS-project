"use client";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";

import UpdateAccountDetails from "./updateAccountForm";
import UpdatePersonalDetails from "./updatePersonalForm";

export default function Settings() {
  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline">
      <Tabs.Item active icon={MdAccountBox} title="Account Details">
        <UpdateAccountDetails />
      </Tabs.Item>
      <Tabs.Item icon={BsPersonVcardFill} title="Personal Details">
        <UpdatePersonalDetails />
      </Tabs.Item>
    </Tabs.Group>
  );
}
