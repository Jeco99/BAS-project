"use client";

import { useState } from "react";

import BarangayDropdown from "../../components/dropdown/barangayDropdown";
import CivilStatusDropdown from "../../components/dropdown/civilstatusDropdown";
import GenderDropdown from "../../components/dropdown/genderDropdown";
import ProvinceDropdown from "../../components/dropdown/provinceDropdown";
import MunicipalDropdown from "../../components/dropdown/municipalDropdown";

import UpdateButton from "../../components/button/updateButton";

function UpdatePersonalDetails() {
  const [getData, setGetData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    sex: "",
    dateofbirth: "",
    civilstatus: "",
    barangay: "",
    municipal: "",
    province: "",
    zone: "",
    street: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    sex: "",
    dateofbirth: "",
    civilstatus: "",
    barangay: "",
    municipal: "",
    province: "",
    zone: "",
    street: "",
    zipcode: "",
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
  };

  console.log(errors);

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
              />
              {errors.zipcode && <small>Zip Code is required!</small>}
            </div>
          </div>

          <UpdateButton />
        </form>
      </div>
    </div>
  );
}

export default UpdatePersonalDetails;
