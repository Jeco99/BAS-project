import FormInput from "../input/formInput";
import FormLabel from "../label/formLabel";

import CivilStatusDropdown from "../dropdown/civilstatusDropdown.jsx";
import GenderDropdown from "../dropdown/genderDropdown";

import personalInputFormData from "../input/personalInputFormData";
import PlaceDropdown from "../dropdown/placeDropdown";

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
      {personalInputFormData.map((formElements) => (
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
      ))}

      <div>
        <GenderDropdown getData={getData} handleChange={handleChange} />
        {errors.sex && <small>Sex is required!</small>}
      </div>

      <div>
        <CivilStatusDropdown getData={getData} handleChange={handleChange} />
        {errors.civilstatus && <small>Civil Status is required!</small>}
      </div>

      <PlaceDropdown
        region={region}
        province={province}
        regionData={regionData}
        errors={errors}
        municipal={municipal}
        provinceData={provinceData}
        barangay={barangay}
        cityData={cityData}
        brgy={brgy}
        barangayData={barangayData}
      />

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
