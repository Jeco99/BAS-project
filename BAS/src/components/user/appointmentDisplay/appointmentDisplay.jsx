export default function AppointmentDisplay() {
    return (

<div className="p-4 ml-64 mt-32">
  <form className="space-y-4">
    <div>
      <label for="dropdown" className="block text-gray-700">Request:</label>
      <select id="dropdown" name="dropdown" className="w-50 flex px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500">
        <option>Barangay Clearance</option>
        <option>Baranggay Certificate</option>
        <option>Barangay Permit</option>
      </select>
    </div>
    
    <div>
        <label for="purpose" className="block text-gray-700">Purpose:</label>
        <textarea id="purpose" rows="4" class="block flex p-2.5 w-1/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
    </div>
    
    <div>
      <label for="datepicker" className="block text-gray-700">Date:</label>
      <input id="datepicker" type="date" name="datepicker" className="w-50 flex px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"/>
    </div>
    
    <div>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
    </div>
  </form>
</div>
    )};