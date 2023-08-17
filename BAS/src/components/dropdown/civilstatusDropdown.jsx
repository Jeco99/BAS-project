import FormLabel from "../label/formLabel";

export default function CivilStatusDropdown({getData, handleChange}) {
    const civilstatusOption = ['Select', 'Single', 'Married', 'Divorced', 'Widowed', 'Separated', 'Domestic Partnership/Civil Union']
    return (
        <div className="relative w-full">
            <FormLabel labelName="Civil Status" id="civilstatus" showRequired={true}/>
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