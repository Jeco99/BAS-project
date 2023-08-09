export default function CivilStatusDropdown({getData, setGetData}) {
    const civilstatusOption = ['Select', 'Single', 'Married', 'Divorced', 'Widowed', 'Separated', 'Domestic Partnership/Civil Union']
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
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 text-small md:text-medium lg:text-lg"
               value={getData["civilstatus"]}
               onChange={handleChange}
               name="civilstatus"
            >
                {civilstatusOption.map((value) => (
                    <option key={value}>{value}</option>
                ) )}
            </select>
        </div>
    );
}