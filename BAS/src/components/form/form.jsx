import FormInput from "../input/formInput";
import FormLabel from "../label/formLabel";

import CivilStatusDropdown from "../dropdown/civilstatusDropdown.jsx";
import GenderDropdown from "../dropdown/genderDropdown";

import personalInputFormData from "../input/personalInputFormData";

export default function PersonalForm({
  handleChange,
  errors,
  getData,
  province,
  region,
  regionData,
  municipal,
  provinceData,
  barangay,
  cityData,
  brgy,
  barangayData,
}) {
  return (
    <>
    {
      personalInputFormData.map( (formElements) => (
        <FormInput
        key={formElements.id}
        handleChange={handleChange}
        labelName={formElements.labelName}
        errors={errors}
        errorsmessage={formElements.errormessage}
        id={formElements.id}
        type={formElements.type}
        value={getData[formElements.id]}
        showRequired={formElements.showRequired}
      />
      ) )
    }
      
      <div>
        <GenderDropdown getData={getData} handleChange={handleChange}/>
        {errors.sex && <small>Sex is required!</small>}
      </div>

      <div>
        <CivilStatusDropdown getData={getData} handleChange={handleChange}/>
        {errors.civilstatus && <small>Civil Status is required!</small>}
      </div>

      <div>
        <FormLabel labelName="Region" id="region" showRequired={true}/>
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
        <FormLabel labelName="Province" id="province" showRequired={true}/>
        <select
          onChange={municipal}
          className="inputText"
        >
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
        <FormLabel labelName="Municipality" id="municipal" showRequired={true}/>
        <select
          onChange={barangay}
          className="inputText"
        >
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
        <FormLabel labelName="Barangay" id="barangay" showRequired={true}/>
        <select
          onChange={brgy}
          className="inputText"
        >
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

      <FormInput
        handleChange={handleChange}
        labelName="Zone"
        errors={errors}
        errorsmessage="Zone is required!"
        id="zone"
        type="text"
        onChange={handleChange}
        value={getData.zone}
        showRequired={true}
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
        showRequired={true}
      />
    </>
  );
}
