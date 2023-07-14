export default function CivilStatusDropdown() {
    return (
        <div className="relative w-full">
            <select
               className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option>Select</option>
                <option>Single</option>
                <option>Married</option>
                <option>Select3</option>
            </select>
        </div>
    );
}