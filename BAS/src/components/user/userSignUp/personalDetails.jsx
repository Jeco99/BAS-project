"use client";

import { useState } from "react";

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
      <div className="block m-8 p-6 sm:m-32 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="text-center text-2xl font-semibold">Personal Details</h1>
        <form className="flex flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <label htmlFor="firstName" value="First Name">
                {" "}
                First Name
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="firstName"
              required
              type="text"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="middleName" value="Middle Name">
                Middle Name
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="middleName"
              required
              type="text"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="lastName" value="Last Name">
                Last Name
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="lastName"
              required
              type="text"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="suffix" value="Suffix">
                Suffix
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="suffix"
              required
              type="text"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="zone" value="Zone">
                Zone
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="zone"
              required
              type="text"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="street" value="Street">
                Street
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="street"
              required
              type="text"
            />
          </div>

          <div className="flex gap-6 flex-row ">
            <div className="mb-2">
              <div className="mb-2 block">
                <label htmlFor="birthday" value="Birthday">
                  Birthday
                </label>
              </div>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              />
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="sex" value="Sex">
                  Sex
                </label>
              </div>
              <GenderDropdown />
            </div>
            <div className="mb-2">
              <div className="mb-2 block">
                <label htmlFor="civilStatus" value="Civil Status">
                  CIvil Status
                </label>
              </div>
              <CivilStatusDropdown />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-morningGlory text-black"
              onClick={() => {
                setBack(true);
              }}
            >
              Back
            </button>

            <button type="button" className="bg-morningGlory text-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalDetails;
