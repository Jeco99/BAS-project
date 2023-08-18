import FormLabel from "../../../components/label/formLabel";
import commonInputFormData from "../../../components/input/commonInputFormData";
import FormInput from "../../../components/input/formInput";

const AdminSignUp = ({
  getData,
  handleChange,
  province,
  region,
  regionData,
  municipal,
  provinceData,
  barangay,
  cityData,
  brgy,
  barangayData,
  errors
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {commonInputFormData.map((formElements) => (
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
          <select onChange={province} onSelect={region} className="inputText">
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
          <FormLabel labelName="Province" id="province" showRequired={true} />
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
          <FormLabel labelName="Barangay" id="barangay" showRequired={true} />
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
          <input type="text" className="inputText" onChange={handleChange}/>
          {errors.zone && <small>Zone is required!</small>}
        </div>
        <div>
          <FormLabel labelName="Street" id="street" showRequired={true} />
          <input type="text" className="inputText" onChange={handleChange}/>
          {errors.street && <small>Street is required!</small>}
        </div>
        
        <div>
          <FormLabel labelName="Zipcode" id="zipcode" showRequired={true} />
          <input type="number" className="inputText" onChange={handleChange}/>
          {errors.zipcode && <small>Zipcode is required!</small>}
        </div>
      </div>
    </>
  );
};

export default AdminSignUp;
