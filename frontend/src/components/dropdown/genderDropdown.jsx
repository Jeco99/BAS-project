import FormLabel from "../label/formLabel";

export default function GenderDropdown({ getData, handleChange }) {
  return (
    <div className="relative w-full ">
      <FormLabel labelName="Sex" id="sex" showRequired={true}/>
      <select 
      className="inputText"
      value={getData["sex"]}
      onChange={handleChange}
      name="sex"
      >
        <option>Select</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  );
}
