import FormInput from "../components/input/formInput";
import FormLabel from "../components/label/formLabel";

import CivilStatusDropdown from "../components/dropdown/civilstatusDropdown.jsx";
import GenderDropdown from "../components/dropdown/genderDropdown";

export default function PersonalForm({
  handleChange,
  errors,
  getData,
  setGetData,
  province,
  region,
  regionData,
  city,
  provinceData,
  barangay,
  cityData,
  brgy,
  barangayData,
}) {
  return (
    <>
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
          <label htmlFor="suffix" className="labelText">Suffix (optional)</label>
        </div>
        <input
          className="inputText"
          id="suffix"
          name="suffix"
          type="text"
          onChange={handleChange}
          value={getData.suffix}
        />
      </div>

      <div>
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
        <CivilStatusDropdown getData={getData} setGetData={setGetData} />
        {errors.civilstatus && <small>Civil Status is required!</small>}
      </div>

      <div>
        <FormLabel labelName="Region" id="region" />
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
      </div>
      <div>
        <FormLabel labelName="Province" id="province" />
        <select
          onChange={city}
          className="inputText"
        >
          <option disabled>Select Province</option>
          {provinceData &&
            provinceData.length > 0 &&
            provinceData.map((item) => (
              <option key={item.province_code} value={item.province_code}>
                {item.province_name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <FormLabel labelName="Municipality" id="municipality" />
        <select
          onChange={barangay}
          className="inputText"
        >
          <option disabled>Select City</option>
          {cityData &&
            cityData.length > 0 &&
            cityData.map((item) => (
              <option key={item.city_code} value={item.city_code}>
                {item.city_name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <FormLabel labelName="Barangay" id="barangay" />
        <select
          onChange={brgy}
          className="inputText"
        >
          <option disabled>Select Barangay</option>
          {barangayData &&
            barangayData.length > 0 &&
            barangayData.map((item) => (
              <option key={item.brgy_code} value={item.brgy_code}>
                {item.brgy_name}
              </option>
            ))}
        </select>
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
    </>
  );
}
