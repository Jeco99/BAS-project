export default function CivilStatusDropdown({getData, setGetData}) {
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setGetData({
          ...getData,
          [name]: value,
        });
      };
    return (
        <div className="relative w-full">
            <select
               className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
               value={getData["civilstatus"]}
               onChange={handleChange}
               name="civilstatus"
            >
                <option>Select</option>
                <option>Single</option>
                <option>Married</option>
                <option>Select3</option>
            </select>
        </div>
    );
}