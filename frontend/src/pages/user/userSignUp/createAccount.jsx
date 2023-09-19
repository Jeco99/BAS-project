// TODO: may error sa pag insert

import { useState, useEffect } from "react";

import { AiOutlineCaretLeft } from "react-icons/ai";

import ImageUpload from "../../../components/imageUpload/imageUpload";
import AdminSignUp from "./adminAccount";
import UserAccount from "./userAccount";
import { dataValidation } from "../../../utils/createAccount_dataValidation";

import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";

export default function CreateAccount() {
  const [getData, setGetData] = useState({
    user_type: "",
    imagefile: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    middlename: "",
    lastname: "",
    suffix: "",
    dateofbirth: "",
    contactnumber: "",
    sex: "",
    civilstatus: "",
    region: "",
    province: "",
    municipal: "",
    barangay: "",
    zone: "",
    street: "",
    zipcode: "",
  });
  const [regionData, setRegion] = useState([]);
  const [provinceData, setProvince] = useState([]);
  const [cityData, setCity] = useState([]);
  const [barangayData, setBarangay] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

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
    setGetData({ ...getData, ["barangay"]: e.target.selectedOptions[0].text });
  };

  useEffect(() => {
    region();
  }, []);

  const [errors, setErrors] = useState({
    imagefile: null,
    username: null,
    email: null,
    password: null,
    confirmpassword: null,
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
    zipcode: null,
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    dataValidation(getData, setErrors, errors);

  
  

   await fetch('http://localhost:3001/createaccount/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getData),
      });

      
  };

  console.log(getData);
  return (
    <div className="m-5 md:mx-[6rem] lg:mx-[15rem] 2xl:mx-[30rem]">
      <div className="flex items-center justify-between">
        <AiOutlineCaretLeft
          size={"75px"}
          onClick={() => (location.href = "/")}
        />
        <h1 className="flex mx-auto text-3xl sm:text-6xl font-semibold">
          Create Account
        </h1>
      </div>

      <div className="block mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="w-full">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <ImageUpload
              getData={getData}
              setGetData={setGetData}
              errors={errors}
            />
            <div className="flex space-x-3 labelText">
              <p>Are you an official?</p>
              <input
                type="radio"
                id="yes"
                name="isOfficial"
                value="admin"
                onChange={(e) =>
                  setGetData({ ...getData, ["user_type"]: e.target.value })
                }
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="isOfficial"
                value="resident"
                onChange={(e) =>
                  setGetData({ ...getData, ["user_type"]: e.target.value })
                }
              />
              <label htmlFor="no">No</label>
            </div>
            {getData.user_type === "admin" ? (
              <AdminSignUp
                getData={getData}
                handleChange={handleChange}
                province={province}
                region={region}
                regionData={regionData}
                municipal={municipal}
                provinceData={provinceData}
                barangay={barangay}
                cityData={cityData}
                brgy={brgy}
                barangayData={barangayData}
                errors={errors}
              />
            ) : (
              <UserAccount
                getData={getData}
                handleChange={handleChange}
                province={province}
                region={region}
                regionData={regionData}
                municipal={municipal}
                provinceData={provinceData}
                barangay={barangay}
                cityData={cityData}
                brgy={brgy}
                barangayData={barangayData}
                errors={errors}
              />
            )}
            {/* {userGetData.map( (data) => (
              <div key={data.user_id}>
                <li>{data.first_name}</li>
              </div>
            ))} */}

            <div className="flex justify-between gap-4 flex-col sm:flex-row">
              <button
                className="cancelBtn btnRadius"
                onClick={() => (location.href = "/")}
              >
                Back
              </button>
              <button className="btn btnRadius"> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
