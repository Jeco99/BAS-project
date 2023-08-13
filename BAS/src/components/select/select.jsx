export default function Select({
  value,
  id,
  handleChange,
  getData,
  optionData
}) {
  return (
    <select
      className="inputText"
      value={value}
      onChange={handleChange}
      name={id}
    >
      {optionData.map((selectData) => (
        <option key={id}>{selectData}</option>
      ))}
    </select>
  );
}
