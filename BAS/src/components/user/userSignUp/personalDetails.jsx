"use client";

import { useState } from "react";


import { Button } from "@material-tailwind/react";

import BarangayDropdown from "../../dropdown/barangayDropdown";
import CivilStatusDropdown from "../../dropdown/civilstatusDropdown";
import GenderDropdown from "../../dropdown/genderDropdown";
import ProvinceDropdown from "../../dropdown/provinceDropdown";
import MunicipalDropdown from "../../dropdown/municipalDropdown";

function PersonalDetails({ getData, setGetData, handleNext, handlePrev, activeStep, isFirstStep }) {

function PersonalDetails({
  getData,
  setGetData,
  handleNext,
  handlePrev,
  activeStep,
  isFirstStep,
}) {
  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({
    firstname: null,
    middlename: null,
    lastname: null,
    sex: null,
    dateofbirth: null,
    civilstatus: null,
    barangay: null,
    municipal: null,
    province: null,
    zone: null,
    street: null,
    zipcode: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    if (getData.firstname.trim() == "") {
      newErrors.firstname = "Set FirstName";
    } else {
      newErrors.firstname = "";
    }

    if (getData.middlename.trim() == "") {
      newErrors.middlename = "Set MiddleName";
    } else {
      newErrors.middlename = "";
    }

    if (getData.lastname.trim() == "") {
      newErrors.lastname = "Set LastName";
    } else {
      newErrors.lastname = "";
    }

    if (getData.sex.trim() == "") {
      newErrors.sex = "Set Sex";
    } else {
      newErrors.sex = "";
    }

    if (getData.dateofbirth.trim() == "") {
      newErrors.dateofbirth = "Set Birthday";
    } else {
      newErrors.dateofbirth = "";
    }

    if (getData.civilstatus.trim() == "") {
      newErrors.civilstatus = "Set Civil Status";
    } else {
      newErrors.civilstatus = "";
    }

    if (getData.barangay.trim() == "") {
      newErrors.barangay = "Set Barangay";
    } else {
      newErrors.barangay = "";
    }

    if (getData.municipal.trim() == "") {
      newErrors.municipal = "Set Municipal";
    } else {
      newErrors.municipal = "";
    }

    if (getData.municipal.trim() == "") {
      newErrors.municipal = "Set Municipal";
    } else {
      newErrors.municipal = "";
    }

    if (getData.province.trim() == "") {
      newErrors.province = "Set Province";
    } else {
      newErrors.province = "";
    }

    if (getData.zone.trim() == "") {
      newErrors.zone = "Set Zone";
    } else {
      newErrors.zone = "";
    }

    if (getData.street.trim() == "") {
      newErrors.street = "Set Street";
    } else {
      newErrors.street = "";
    }

    if (getData.zipcode.trim() == "") {
      newErrors.zipcode = "Set Zipcode";
    } else {
      newErrors.zipcode = "";
    }

    setErrors(newErrors);

    if(errors.firstname === '' && 
      errors.middlename === '' &&
      errors.lastname === '' &&
      errors.sex === '' &&
      errors.dateofbirth === '' &&
      errors.civilstatus === '' &&
      errors.barangay === '' &&
      errors.municipal === '' &&
      errors.province === '' &&
      errors.zone === '' &&
      errors.street === '' &&
      errors.zipcode === ''
    ){
      alert('Form Submitted');
      //redirect to user dashboard
    }
  };

  console.log(errors)

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
                <label htmlFor="firstName">
                  First Name <sup>*</sup>
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="firstname"
                name="firstname"
                type="text"
                onChange={handleChange}
                value={getData.firstname}
              />
              {errors.firstname && <small>First Name is required!</small>}
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="middleName">
                  Middle Name<sup>*</sup>
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="middlename"
                name="middlename"
                type="text"
                onChange={handleChange}
                value={getData.middlename}
              />
              {errors.middlename && <small>Middle Name is required!</small>}
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="lastName">
                  Last Name<sup>*</sup>
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="lastname"
                name="lastname"
                type="text"
                onChange={handleChange}
                value={getData.lastname}
              />
              {errors.lastname && <small>Last Name is required!</small>}
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="suffix">Suffix (optional)</label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="suffix"
                name="suffix"
                type="text"
                onChange={handleChange}
                value={getData.suffix}
              />
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="sex">
                  Sex <sup>*</sup>
                </label>
              </div>
              <GenderDropdown getData={getData} setGetData={setGetData} />
              {errors.sex && <small>Sex is required!</small>}
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="dateofbirth">
                  Date Of Birth<sup>*</sup>
                </label>
              </div>
              <input
                type="date"
                name="dateofbirth"
                id="dateofbirth"
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                onChange={handleChange}
                value={getData.dateofbirth}
              />
              {errors.dateofbirth && <small>Birthday is required!</small>}
            </div>

            <div className="mb-2">
              <div className="mb-2 block">
                <label htmlFor="civilStatus">
                  Civil Status<sup>*</sup>
                </label>
              </div>
              <CivilStatusDropdown getData={getData} setGetData={setGetData} />
              {errors.civilstatus && <small>Civil Status is required!</small>}
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="barangay">
                  Barangay<sup>*</sup>
                </label>
              </div>
              <BarangayDropdown getData={getData} setGetData={setGetData} />
              {errors.barangay && <small>Barangay is required!</small>}
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="municipal">
                  Municipality<sup>*</sup>
                </label>
              </div>
              <MunicipalDropdown getData={getData} setGetData={setGetData} />
              {errors.municipal && <small>Municipal is required!</small>}
            </div>

            <div className="mb-2">
              <div className="mb-2 block ">
                <label htmlFor="province">
                  Province<sup>*</sup>
                </label>
              </div>
              <ProvinceDropdown getData={getData} setGetData={setGetData} />
              {errors.province && <small>Province is required!</small>}
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="zone">
                  Zone<sup>*</sup>
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="zone"
                name="zone"
                type="text"
                onChange={handleChange}
                value={getData.zone}
              />
              {errors.zone && <small>Zone is required!</small>}
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="street">
                  Street<sup>*</sup>
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="street"
                name="street"
                type="text"
                onChange={handleChange}
                value={getData.street}
              />
              {errors.street && <small>Street is required!</small>}
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="zipCode">
                  Zip Code<sup>*</sup>
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="zipcode"
                name="zipcode"
                type="text"
                onChange={handleChange}
                value={getData.zipcode}
              />
              {errors.zipcode && <small>Zip Code is required!</small>}
            </div>
          </div>
          <div className="mt-16 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Button
              onClick={handleNext}
              type={activeStep == 0 ? "button" : "submit"}
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
