"use client";

import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";
import { useEffect, useState } from "react";

import { Button } from "@material-tailwind/react";
import PersonalForm from "../../../components/form/form";

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

  const [regionData, setRegion] = useState([]);
  const [provinceData, setProvince] = useState([]);
  const [cityData, setCity] = useState([]);
  const [barangayData, setBarangay] = useState([]);

  const region = () => {
    regions().then((response) => {
      setRegion(response);
    });
  };

  const province = (e) => {
    setGetData({ ...getData, ["region"]: e.target.selectedOptions[0].text });
    provinces(e.target.value).then((response) => {
      setProvince(response);
      setCity([]);
      setBarangay([]);
    });
  };

  const municipal = (e) => {
    setGetData({ ...getData, ["province"]: e.target.selectedOptions[0].text });
    cities(e.target.value).then((response) => {
      setCity(response);
    });
  };

  const barangay = (e) => {
    setGetData({ ...getData, ["municipal"]: e.target.selectedOptions[0].text });
    barangays(e.target.value).then((response) => {
      setBarangay(response);
    });
  };

  const brgy = (e) => {
    // setBarangayAddr(e.target.selectedOptions[0].text);
    setGetData({ ...getData, ["barangay"]: e.target.selectedOptions[0].text });
  };

  useEffect(() => {
    region();
  }, []);

  console.log(getData);

  const [errors, setErrors] = useState({
    firstname: null,
    middlename: null,
    lastname: null,
    dateofbirth: null,
    contactnumber: null,
    sex: null,
    civilstatus: null,
    province: null,
    municipal: null,
    barangay: null,
    zone: null,
    street: null,
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

    if (getData.dateofbirth.trim() == "") {
      newErrors.dateofbirth = "Set Birthday";
    } else {
      newErrors.dateofbirth = "";
    }

    if (getData.sex.trim() == "") {
      newErrors.sex = "Set Sex";
    } else {
      newErrors.sex = "";
    }

    if (getData.civilstatus.trim() == "") {
      newErrors.civilstatus = "Set Civil Status";
    } else {
      newErrors.civilstatus = "";
    }

    if (getData.region.trim() == "") {
      newErrors.region = "Set Region";
    } else {
      newErrors.region = "";
    }

    if (getData.province.trim() == "") {
      newErrors.province = "Set Province";
    } else {
      newErrors.province = "";
    }

    if (getData.municipal.trim() == "") {
      newErrors.municipal = "Set Municipal";
    } else {
      newErrors.municipal = "";
    }

    if (getData.barangay.trim() == "") {
      newErrors.barangay = "Set Barangay";
    } else {
      newErrors.barangay = "";
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

    setErrors(newErrors);

    if (
      errors.firstname === "" &&
      errors.middlename === "" &&
      errors.lastname === "" &&
      errors.sex === "" &&
      errors.dateofbirth === "" &&
      errors.region === "" &&
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

  return (
    <div className="mx-auto md:mx-[100px] lg:mx-[290px] xl:mx-[500px] 2xl:[700px]">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold">
        Personal Details
      </h1>
      <div className="block mt-8 p-6  bg-white border border-gray-200 rounded-lg shadow">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <PersonalForm
              handleChange={handleChange}
              errors={errors}
              getData={getData}
              setGetData={setGetData}
              province={province}
              onSelect={region}
              regionData={regionData}
              municipal={municipal}
              provinceData={provinceData}
              barangay={barangay}
              cityData={cityData}
              brgy={brgy}
              barangayData={barangayData}
            />
          </div>
          <div className="mt-5 flex justify-between">
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
