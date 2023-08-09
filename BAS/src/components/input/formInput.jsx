import FormLabel from "../label/formLabel";

export default function FormInput({ value, handleChange, type, id, labelName, errors, errorsmessage }) {
  return (
    <div>
      <div className="mb-2 block">
        <FormLabel labelName={labelName} id={id}/>
      </div>
      <input
        // className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 text-xs md:text-sm lg:text-base"
        className="inputText"
        id={id}
        name={id}
        type={type}
        onChange={handleChange}
        value={value}
      />
      {errors[id] && <small>{errorsmessage}</small>}
    </div>
  );
}
