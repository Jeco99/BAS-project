"use client";

import { useState } from "react";
import { Button, Label, TextInput, Card } from "flowbite-react";
// import { VscCalendar } from "react-icons/vsc";

import GenderDropdown from "./genderDropdown";
import CivilStatusDropdown from "./civilstatusDropdown";
import AccountDetails from "./accountDetails";
import Stepper from "./stepper";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function PersonalDetails() {
  const [back, setBack] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  if (back) {
    return <AccountDetails />;
  }
  return (
    <>
      <Stepper />
      <Card className="block m-8 p-6 sm:m-32 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="text-center text-2xl font-semibold">Personal Details</h1>
        <form className="flex flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="First Name" />
            </div>
            <TextInput id="firstName" required type="text" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="middleName" value="Middle Name" />
            </div>
            <TextInput id="middleName" required type="text" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Last Name" />
            </div>
            <TextInput id="lastName" required type="text" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="suffix" value="Suffix" />
            </div>
            <TextInput id="suffix" required type="text" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="zone" value="Zone" />
            </div>
            <TextInput id="zone" required type="text" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="street" value="Street" />
            </div>
            <TextInput id="street" required type="text" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="birthday" value="Birthday" />
            </div>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="flex flex-row gap-2 sm:flex-col ">
            <div className="mb-2">
              <div className="mb-2 block ">
                <Label htmlFor="sex" value="Sex" />
              </div>
              <GenderDropdown />
            </div>
            <div className="mb-2">
              <div className="mb-2 block">
                <Label htmlFor="civilStatus" value="Civil Status" />
              </div>
              <CivilStatusDropdown />
            </div>
          </div>

          <div className="flex justify-between">
          <Button
            type="button"
            className="bg-morningGlory text-black"
            onClick={() => {
              setBack(true);
            }}
          >
            Back
          </Button>

          <Button
            type="button"
            className="bg-morningGlory text-black"
          >
            Submit
          </Button>
          </div>

   
        </form>
      </Card>
    </>
  );
}

export default PersonalDetails;
