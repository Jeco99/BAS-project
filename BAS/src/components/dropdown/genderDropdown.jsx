import FormLabel from "../label/formLabel";

export default function GenderDropdown({ getData, setGetData }) {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };
  return (
    <div className="relative w-full ">
      <FormLabel labelName="Sex" id="sex" />
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
