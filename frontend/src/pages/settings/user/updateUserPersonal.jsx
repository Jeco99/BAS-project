import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";

import FormInput from "../../../components/input/formInput";
import FormLabel from "../../../components/label/formLabel";
import accountInputFormData from "../../../components/input/accountInputFormData";

import CivilStatusDropdown from "../../../components/dropdown/civilstatusDropdown";
import GenderDropdown from "../../../components/dropdown/genderDropdown";
import { dataValidation } from "../../../utils/createAccount_dataValidation";
import { useNavigate } from "react-router-dom";

const userDetails_Selected_Loader = async (id) => {
  const response = await fetch("http://localhost:3001/root/fetch/" + id,{
    credentials: 'include',
  });
  const userDetails_data = await response.json();
  return userDetails_data;
};

export default function UpdatePersonalAccount() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getData, setGetData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    suffix: "",
    date_of_birth: "",
    sex: "",
    civilstatus: "",
    region: "",
    province: "",
    municipal: "",
    barangay: "",
    zone: "",
    street: "",
    zipcode: ""
  });

  useEffect(() => {
    async function init() {
      const data = await userDetails_Selected_Loader(id);
      setGetData(data);
    }
    init();
  }, []);

  // console.log(getData);

  const [errors, setErrors] = useState({
    first_name: null,
    middle_name: null,
    last_name: null,
    date_of_birth: null,
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    dataValidation(getData, setErrors, errors);

    const response = await fetch(`http://localhost:3001/root/update/userpersonal/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(getData),
    });
  if(response.status == 200){
    navigate(`/root/${id}`)
  }
  else{
    alert('Can\'t be found');
  }
    
  };
  return (
    <div className="block mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="w-full">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

            <GenderDropdown getData={getData} handleChange={handleChange} />
            <CivilStatusDropdown
              getData={getData}
              handleChange={handleChange}
            />
            <div>
              <FormLabel labelName="Region" id="region" showRequired={true} />
              <select
                onChange={province}
                onSelect={region}
                className="inputText"
              >
                
                <option>{getData == "" ? 'Select Region' : getData.region}</option>
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
                <option>{getData == "" ? 'Select Province' : getData.province}</option>
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
                <option>{getData == "" ? 'Select Municipal' : getData.municipal}</option>
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
                <option>{getData == "" ? 'Select Barangay' : getData.barangay}</option>
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
                id="zone"
                name="zone"
                value={getData['zone']}
                type="text"
                className="inputText"
                onChange={handleChange}
              />
              {errors.zone && <small>Zone is required!</small>}
            </div>
            <div>
              <FormLabel labelName="Street" id="street" showRequired={true} />
              <input
                id="street"
                name="street"
                type="text"
                value={getData['street']}
                className="inputText"
                onChange={handleChange}
              />
              {errors.street && <small>Street is required!</small>}
            </div>

            <div>
              <FormLabel labelName="Zipcode" id="zipcode" showRequired={true} />
              <input
                id="zipcode"
                name="zipcode"
                type="number"
                value={getData['zipcode']}
                className="inputText"
                onChange={handleChange}
              />
              {errors.zipcode && <small>Zipcode is required!</small>}
            </div>
          </div>
          <div className="flex justify-between gap-4 flex-col sm:flex-row">
            <button
              className="cancelBtn btnRadius"
              onClick={() => (location.href = `/root/${id}/dashboard`)}
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
