"use client";

import { useState } from "react";

import GenderDropdown from "./genderDropdown";
import CivilStatusDropdown from "./civilstatusDropdown";
import MunicipalDropdown from "./municipalDropdown";
import BarangayDropdown from "./barangayDropdown";
import ProvinceDropdown from "./provinceDropdown";

import { Button } from "@material-tailwind/react";


function PersonalDetails({ getData, setGetData, handleNext, handlePrev, activeStep, isFirstStep }) {

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({
    firstname:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted')

    // let newErrors = {...errors};

    // if(getData.firstname.trim() == ''){
    //   newErrors.firstname = 'Set FirstName'
    // } else {
    //   newErrors.firstname = ''
    // }

    // setErrors(newErrors);
    // console.log(errors.firstname)
  }


  

  return (
    <div>
      <h1 className="text-center text-2xl sm:text-4xl py-4 font-semibold">
        Personal Details
      </h1>
      <div className="block mt-8 p-6  bg-white border border-gray-200 rounded-lg shadow">
     
        <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-2 block">
              <label htmlFor="firstName">First Name</label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="firstname"
              name="firstname"
              required
              type="text"
              onChange={handleChange}
            />
            {/* {errors.firstname && (<div>First Name is required!</div>)} */}
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="middleName">Middle Name</label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="middlename"
              name="middlename"
              required
              type="text"
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="lastname"
              name="lastname"
              required
              type="text"
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="suffix">Suffix</label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="suffix"
              name="suffix"
              required
              type="text"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <div className="mb-2 block ">
              <label htmlFor="sex" value="Sex">
                Sex
              </label>
            </div>
            <GenderDropdown getData={getData} setGetData={setGetData} />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="dateofbirth">Date Of Birth</label>
            </div>
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <div className="mb-2 block">
              <label htmlFor="civilStatus">Civil Status</label>
            </div>
            <CivilStatusDropdown getData={getData} setGetData={setGetData} />
          </div>

          <div className="mb-2">
            <div className="mb-2 block ">
              <label htmlFor="barangay">Barangay</label>
            </div>
            <BarangayDropdown getData={getData} setGetData={setGetData} />
          </div>

          <div className="mb-2">
            <div className="mb-2 block ">
              <label htmlFor="municipal">Municipality</label>
            </div>
            <MunicipalDropdown getData={getData} setGetData={setGetData} />
          </div>

          <div className="mb-2">
            <div className="mb-2 block ">
              <label htmlFor="province">Province</label>
            </div>
            <ProvinceDropdown getData={getData} setGetData={setGetData} />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="zone">Zone</label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="zone"
              name="zone"
              required
              type="text"
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="street">Street</label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="street"
              name="street"
              required
              type="text"
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <label htmlFor="zipCode">Zip Code</label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="zipcode"
              name="zipcode"
              required
              type="text"
              onChange={handleChange}
            />
          </div>
          </div>
          <div className="mt-16 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}          
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          type= {activeStep == 0 ? "button" : "submit"}
        >
          {activeStep == 0 ? "Next" : "Submit"}
        </Button>
      </div>
        </form>
       
      
      </div>
    </div>
  );
}

export default PersonalDetails;
