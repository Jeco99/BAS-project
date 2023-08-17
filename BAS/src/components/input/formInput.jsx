import FormLabel from "../label/formLabel";
import Input from "./input";

export default function FormInput({
  value,
  handleChange,
  type,
  id,
  labelName,
  errors,
  errorsmessage,
  showRequired,
}) {
  return (
    <div>
      <div className="mb-2 block">
        <FormLabel labelName={labelName} id={id} showRequired={showRequired} />
      </div>
      <Input id={id} type={type} handleChange={handleChange} value={value} />
      {errors[id] && <small>{errorsmessage}</small>}
    </div>
  );
}
