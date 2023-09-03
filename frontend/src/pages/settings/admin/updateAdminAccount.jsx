import { useState, useEffect } from "react";
import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";

import FormInput from "../../../components/input/formInput";
import FormLabel from "../../../components/label/formLabel";
import ImageUpload from "../../../components/imageUpload/imageUpload";
import accountInputFormData from "../../../components/input/accountInputFormData";

export default function UpdateAdminAccount() {
  const [getData, setGetData] = useState({
    imagefile: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    contactnumber: "",
    firstname: "",
    middlename: "",
    lastname: "",
    suffix: "",
    dateofbirth: "",
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
    sex: null,
    civilstatus: null,
    province: null,
    municipal: null,
    barangay: null,
    zone: null,
    street: null,
    zipcode: null,
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
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    if (getData.imagefile == "") {
      newErrors.imagefile = "Set ImageFile";
    } else {
      newErrors.imagefile = "";
    }

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

    if (
      errors.imagefile === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.confirmpassword === "" &&
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
    }
  };
  return (
    <div className="block mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="w-full">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <ImageUpload
            getData={getData}
            setGetData={setGetData}
            errors={errors}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {accountInputFormData.map((formElements) => (
              <FormInput
                key={formElements.id}
                id={formElements.id}
                type={formElements.type}
                handleChange={handleChange}
                value={getData[formElements.id]}
                labelName={formElements.labelName}
                errors={errors}
                errorsmessage={formElements.errormessage}
                showRequired={formElements.showRequired}
              />
            ))}
            <div>
              <FormLabel labelName="Region" id="region" showRequired={true} />
              <select
                onChange={province}
                onSelect={region}
                className="inputText"
              >
                <option>Select Region</option>
                {regionData &&
                  regionData.length > 0 &&
                  regionData.map((item) => (
                    <option key={item.region_code} value={item.region_code}>
                      {item.region_name}
                    </option>
                  ))}
              </select>
              {errors.region && <small>Region is required!</small>}
            </div>
            <div>
              <FormLabel
                labelName="Province"
                id="province"
                showRequired={true}
              />
              <select onChange={municipal} className="inputText">
                <option>Select Province</option>
                {provinceData &&
                  provinceData.length > 0 &&
                  provinceData.map((item) => (
                    <option key={item.province_code} value={item.province_code}>
                      {item.province_name}
                    </option>
                  ))}
              </select>
              {errors.province && <small>Province is required!</small>}
            </div>
            <div>
              <FormLabel
                labelName="Municipality"
                id="municipal"
                showRequired={true}
              />
              <select onChange={barangay} className="inputText">
                <option>Select Municipal</option>
                {cityData &&
                  cityData.length > 0 &&
                  cityData.map((item) => (
                    <option key={item.city_code} value={item.city_code}>
                      {item.city_name}
                    </option>
                  ))}
              </select>
              {errors.municipal && <small>Municipality is required!</small>}
            </div>
            <div>
              <FormLabel
                labelName="Barangay"
                id="barangay"
                showRequired={true}
              />
              <select onChange={brgy} className="inputText">
                <option>Select Barangay</option>
                {barangayData &&
                  barangayData.length > 0 &&
                  barangayData.map((item) => (
                    <option key={item.brgy_code} value={item.brgy_code}>
                      {item.brgy_name}
                    </option>
                  ))}
              </select>
              {errors.province && <small>Barangay is required!</small>}
            </div>

            <div>
              <FormLabel labelName="Zone" id="zone" showRequired={true} />
              <input
                type="text"
                className="inputText"
                onChange={handleChange}
              />
              {errors.zone && <small>Zone is required!</small>}
            </div>
            <div>
              <FormLabel labelName="Street" id="street" showRequired={true} />
              <input
                type="text"
                className="inputText"
                onChange={handleChange}
              />
              {errors.street && <small>Street is required!</small>}
            </div>

            <div>
              <FormLabel labelName="Zipcode" id="zipcode" showRequired={true} />
              <input
                type="number"
                className="inputText"
                onChange={handleChange}
              />
              {errors.zipcode && <small>Zipcode is required!</small>}
            </div>
          </div>
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
  );
}
