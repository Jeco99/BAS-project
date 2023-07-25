export default function MunicipalDropdown({getData, setGetData}) {
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
            <select
               className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
               value={getData["municipal"]}
               onChange={handleChange}
               name="municipal"
            >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
    );
}