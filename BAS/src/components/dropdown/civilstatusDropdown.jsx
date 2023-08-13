import FormLabel from "../label/formLabel";

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
            <FormLabel labelName="Civil Status" id="civilstatus" />
            <select
               className="inputText"
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