import FormLabel from "../label/formLabel";

export default function FormInput({ value, handleChange, type, id, labelName, errors, errorsmessage }) {
  return (
    <div>
      <div className="mb-2 block">
        <FormLabel labelName={labelName} id={id}/>
      </div>
      <input
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
