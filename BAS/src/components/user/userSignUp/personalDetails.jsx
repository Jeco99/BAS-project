"use client";

import { useState } from "react";

import GenderDropdown from "./genderDropdown";
import CivilStatusDropdown from "./civilstatusDropdown";
import MunicipalDropdown from "./municipalDropdown";
import BarangayDropdown from "./barangayDropdown";
import ProvinceDropdown from "./provinceDropdown";
import AccountDetails from "./accountDetails";
import Stepper from "./stepper";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PersonalDetails() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-8 pr-8">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Update Profile
          </button>
        </div>
        <header className="flex mt-8 mb-8 justify-center">
          <nav className="mx-8 h-81 w-362">
            <button className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t">
              Account
            </button>
          </nav>
          <nav className="mx-8 h-81 w-362">
            <button className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t">
              Personal
            </button>
          </nav>
        </header>
        <hr className="border-b-2 border-black w-5/6 m-auto" />
      </div>
      <div className="block m-8 p-6 sm:m-32 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="text-center text-2xl font-semibold">Personal Details</h1>
        <div>
          <form className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="mb-2 block">
                <label htmlFor="firstName" value="First Name">
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
                <label htmlFor="birthday" value="Birthday">
                  Birthday
                </label>
              </div>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border rounded-md"
              />
            </div>

            <div className="mb-2">
              <div className="mb-2 block">
                <label htmlFor="civilStatus" value="Civil Status">
                  CIvil Status
                </label>
              </div>
              <CivilStatusDropdown />
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="sex" value="Sex">
                  Barangay
                </label>
              </div>
              <BarangayDropdown />
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="sex" value="Sex">
                  Municipality
                </label>
              </div>
              <MunicipalDropdown />
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="sex" value="Sex">
                  Province
                </label>
              </div>
              <ProvinceDropdown />
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

            <div>
              <div className="mb-2 block">
                <label htmlFor="zipCode" value="Zip Code">
                  Zip Code
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="zipCode"
                required
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-end mt-8 pr-8">
          <button className="mr-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </div>
        <header className="flex mt-8 mb-8"></header>
      </div>
    </>
  );
}

export default PersonalDetails;
