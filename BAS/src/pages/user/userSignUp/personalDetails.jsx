"use client";

import { useState } from "react";

import { Button } from "@material-tailwind/react";

import BarangayDropdown from "../../../components/dropdown/barangayDropdown";
import CivilStatusDropdown from "../../../components/dropdown/civilstatusDropdown";
import GenderDropdown from "../../../components/dropdown/genderDropdown";
import ProvinceDropdown from "../../../components/dropdown/provinceDropdown";
import MunicipalDropdown from "../../../components/dropdown/municipalDropdown";

import FormInput from "../../../components/input/formInput";
import FormLabel from "../../../components/label/formLabel";

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

    if (
      errors.firstname === "" &&
      errors.middlename === "" &&
      errors.lastname === "" &&
      errors.sex === "" &&
      errors.dateofbirth === "" &&
      errors.civilstatus === "" &&
      errors.barangay === "" &&
      errors.municipal === "" &&
      errors.province === "" &&
      errors.zone === "" &&
      errors.street === "" &&
      errors.zipcode === ""
    ) {
      alert("Form Submitted");
      //redirect to user dashboard
    }
  };

  console.log(errors);

  return (
    <div className="mx-auto md:mx-[100px] lg:mx-[290px] xl:mx-[500px] 2xl:[700px]">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold">
        Personal Details
      </h1>
      <div className="block mt-8 p-6  bg-white border border-gray-200 rounded-lg shadow">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormInput
              handleChange={handleChange}
              labelName="First Name"
              errors={errors}
              errorsmessage="First Name is required!"
              id="firstname"
              type="text"
              onChange={handleChange}
              value={getData.firstname}
            />
            <FormInput
              handleChange={handleChange}
              labelName="Middle Name"
              errors={errors}
              errorsmessage="Middle Name is required!"
              id="middlename"
              type="text"
              onChange={handleChange}
              value={getData.middlename}
            />
            <FormInput
              handleChange={handleChange}
              labelName="Last Name"
              errors={errors}
              errorsmessage="Last Name is required!"
              id="lastname"
              type="text"
              onChange={handleChange}
              value={getData.lastname}
            />

            <div>
              <div className="mb-2 block">
                <label htmlFor="suffix">Suffix (optional)</label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 text-2xl"
                id="suffix"
                name="suffix"
                type="text"
                onChange={handleChange}
                value={getData.suffix}
              />
            </div>

            <div>
              <FormLabel labelName="Sex" id="sex" />
              <GenderDropdown getData={getData} setGetData={setGetData} />
              {errors.sex && <small>Sex is required!</small>}
            </div>

            <FormInput
              handleChange={handleChange}
              labelName="Date of Birth"
              errors={errors}
              errorsmessage="Birthday is required!"
              id="dateofbirth"
              type="date"
              onChange={handleChange}
              value={getData.dateofbirth}
            />

            <div>
              <FormLabel labelName="Civil Status" id="civilstatus" />
              <CivilStatusDropdown getData={getData} setGetData={setGetData} />
              {errors.civilstatus && <small>Civil Status is required!</small>}
            </div>

            <div>
              <FormLabel labelName="Province" id="province" />
              <ProvinceDropdown getData={getData} setGetData={setGetData} />
              {errors.province && <small>Province is required!</small>}
            </div>

            <div>
              <FormLabel labelName="Municipality" id="municipal" />
              <MunicipalDropdown getData={getData} setGetData={setGetData} />
              {errors.municipal && <small>Municipal is required!</small>}
            </div>

            <div>
              <FormLabel labelName="Barangay" id="barangay" />
              <BarangayDropdown getData={getData} setGetData={setGetData} />
              {errors.barangay && <small>Barangay is required!</small>}
            </div>

            <FormInput
              handleChange={handleChange}
              labelName="Zone"
              errors={errors}
              errorsmessage="Zone is required!"
              id="zone"
              type="text"
              onChange={handleChange}
              value={getData.zone}
            />

            <FormInput
              handleChange={handleChange}
              labelName="Street"
              errors={errors}
              errorsmessage="Street is required!"
              id="street"
              type="text"
              onChange={handleChange}
              value={getData.street}
            />

            <FormInput
              handleChange={handleChange}
              labelName="Zip Code"
              errors={errors}
              errorsmessage="Zip Code is required!"
              id="zipcode"
              type="number"
              onChange={handleChange}
              value={getData.zipcode}
            />
          </div>
          <div className="mt-16 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep} className="btn">
              Prev
            </Button>
            <Button
              onClick={handleNext}
              className="btn"
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
