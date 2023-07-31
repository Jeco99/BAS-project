import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentDisplay() {
  const [startDate, setStartDate] = useState(new Date());
  const [request, setRequest] = useState('');
  const [purpose, setPurpose] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const weekDays = (date) => {
    // Exclude weekends (Saturday and Sunday)
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>

     <h1 className="text-2xl sm:text-4xl py-4 font-semibold">Appointment</h1>
               
    <form className="space-y-10 mt-10 p-4 mx-auto max-w-lg" onSubmit={handleSubmit}>

      <div>
        <label htmlFor="RequestList" className="block text-gray-700">
          Request
        </label>
        <select
          id="RequestList"
          name="RequestList"
          className="w-full flex px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 overflow-y-auto" 
          required
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          >
          <option value="">--Select an option--</option>
            <option value="Barangay Clearance">Barangay Clearance</option>
            <option value="Barangay Certificate">Barangay Certificate</option>
            <option value="Barangay Permit">Barangay Permit</option>
        </select>
      </div>

      <div>
        <label htmlFor="purpose" className="block text-gray-700">
          Purpose
        </label>
        <textarea
          id="purpose"
          rows="4"
          className="w-full flex px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 overflow-y-auto" 
          required
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          >
          </textarea>
      </div>
      <div>
        <label htmlFor="SelectTime" className="block text-gray-700">
          Select time (8:00 - 5:00)
        </label>
        <select
          id="SelectTime"
          name="SelectTime"
          className="w-full flex px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 overflow-y-auto" 
          required
          value={selectTime}
          onChange={(e) => setSelectTime(e.target.value)}
          >
          <option value="">--Select an option--</option>
            <option value="8:00 - 9:00">8:00 - 9:00</option>
            <option>9:00 - 10:00</option>
            <option>10:00 - 11:00</option>
            <option>11:00 - 12:00</option>
            <option>12:00 - 1:00</option>
            <option>1:00 - 2:00</option>
            <option>2:00 - 3:00</option>
            <option>3:00 - 4:00</option>
            <option>4:00 - 5:00</option>
        </select>
      </div>
      <div>
        <label htmlFor="datepicker" className="block text-gray-700">
          Select date
        </label>
        <DatePicker
          id="datepicker"
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          filterDate={weekDays}
          minDate={new Date()}
          maxDate={new Date("2023-8-31")}
          withPortal
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-black bg-beetleGreen rounded-md hover:bg-morningGlory hover:text-black"
        >
          Submit
        </button>
      </div>
    </form>

    {showModal && (
        <div className="fixed block inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 overflow-x-hidden overflow-y-auto">
          <div className="bg-gray-50 border-2 p-6 rounded-lg mx-8">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <p>Request: {request}</p>
            <p>Purpose: {purpose}</p>
            <p>Time: {selectTime}</p>
            <p>Date: {startDate.toDateString()}</p>
            <div className="pt-8">
            <button 
            type="button" 

            className="text-black bg-beetleGreen hover:bg-morningGlory rounded-lg text-sm px-5 py-2.5 text-center hover:text-black"

            onClick={""}
            >
              Proceed
              </button>
            <button 
            type="button" 

            className="text-black bg-white hover:bg-gray-100 rounded-lg border border-gray-400 text-sm font-medium px-5 py-2.5 hover:text-black"

            onClick={closeModal}
            >
              Back
              </button>
            </div>
          </div>
        </div>
      )}
</div>
  );
}

export default AppointmentDisplay;
