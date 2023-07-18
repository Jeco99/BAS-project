export default function BarangayDropdown() {
    return (
        <div className="relative w-full ">
            <select
               className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
    );
}