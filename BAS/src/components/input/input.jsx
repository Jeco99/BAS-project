export default function Input({ id, type, handleChange, value }) {
  return (
    <input
      className="inputText"
      id={id}
      name={id}
      type={type}
      onChange={handleChange}
      value={value}
    />
  );
}
