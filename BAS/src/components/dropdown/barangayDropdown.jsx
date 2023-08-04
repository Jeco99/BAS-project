export default function BarangayDropdown({getData, setGetData}) {

    const barangayOption = [
        'Select',
        'Agboy Norte',
        'Agboy Sur',
        'Agta',
        'Ambulong',
        'Anonang',
        'Apian',
        'Avanzada',
        'Awis',
        'Ayabang',
        'Ayubo',
        'Bacolod',
        'Baje',
        'Banagan',
        'Barangbang',
        'Barasan',
    ]

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
               className="w-full p-2.5 text-black-500 text-2xl bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
               value={getData["barangay"]}
                onChange={handleChange}
                name="barangay"
            >
                  {barangayOption.map((value) => (
                    <option key={value}>{value}</option>
                ) )}
            </select>
        </div>
    );
}