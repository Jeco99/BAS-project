// TODO: may error sa pag insert

import { useState, useEffect } from "react";

import { AiOutlineCaretLeft } from "react-icons/ai";

import ImageUpload from "../../../components/imageUpload/imageUpload";
import AdminSignUp from "./adminAccount";
import UserAccount from "./userAccount";

import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";
import { useLoaderData } from "react-router-dom";

export const userLoader = async () =>{
  const response = await fetch("http://localhost:3001/createaccount");
  const userData = await response.json();
  return userData
}

export default function CreateAccount() {
  const userGetData = useLoaderData();
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

  function dataValidation(){
    let newErrors = { ...errors };

    // if (getData.imagefile == "") {
    //   newErrors.imagefile = "Set ImageFile";
    // } else {
    //   newErrors.imagefile = "";
    // }

    if (getData.username.trim() == "") {
      newErrors.username = "Set Username";
    } else {
      newErrors.username = "";
    }

    if (getData.email.trim() == "") {
      newErrors.email = "Set Email";
    } else {
      newErrors.email = "";
    }

    if (getData.password != getData.confirmpassword) {
      alert("password not match!");
    }

    if (getData.password.trim() == "") {
      newErrors.password = "Set Password";
    } else {
      newErrors.password = "";
    }

    if (getData.confirmpassword.trim() == "") {
      newErrors.confirmpassword = "Set Confirm Password";
    } else {
      newErrors.confirmpassword = "";
    }

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

    if (getData.zipcode.trim() == "") {
      newErrors.zipcode = "Set Zipcode";
    } else {
      newErrors.zipcode = "";
    }

    setErrors(newErrors);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // dataValidation();

   
    // if (
    //   errors.firstname === "" &&
    //   errors.middlename === "" &&
    //   errors.lastname === "" &&
    //   errors.sex === "" &&
    //   errors.dateofbirth === "" &&
    //   errors.region === "" &&
    //   errors.civilstatus === "" &&
    //   errors.barangay === "" &&
    //   errors.municipal === "" &&
    //   errors.province === "" &&
    //   errors.zone === "" &&
    //   errors.street === "" &&
    //   errors.zipcode === ""
    // ) {
     
    // }

    try {
      const response = await fetch('http://localhost:3001/createaccount/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getData),
      });

      if (response.status === 200) {
        alert('Data inserted successfully');
        return location.href = "/root"
      } else {
        alert('Error inserting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
            {userGetData.map( (data) => (
              <div key={data.user_id}>
                <li>{data.first_name}</li>
              </div>
            ))}

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
