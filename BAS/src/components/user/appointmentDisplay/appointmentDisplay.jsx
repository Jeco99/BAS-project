import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentDisplay() {
  const [startDate, setStartDate] = useState(new Date());
  const [request, setRequest] = useState('');
  const [purpose, setPurpose] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const weekDays = (date) => {
    // Exclude weekends (Saturday and Sunday)
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const minTime = new Date();
  minTime.setHours(8, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(16, 0, 0);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
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
    <form className="space-y-10 mt-32 p-4 mx-auto max-w-lg" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dropdown" className="block text-gray-700">
          Request:
        </label>
        <select
          id="dropdown"
          name="dropdown"
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" 
          required
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          >
          <option value="">Select an option</option>
            <option value="Barangay Clearance">Barangay Clearance</option>
            <option value="Barangay Certificate">Barangay Certificate</option>
            <option value="Barangay Permit">Barangay Permit</option>
        </select>
      </div>

      <div>
        <label htmlFor="purpose" className="block text-gray-700">
          Purpose:
        </label>
        <textarea
          id="purpose"
          rows="4"
          className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          required
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          >
          </textarea>
      </div>
      <div>
        <label htmlFor="datepicker" className="block text-gray-700">
          Select time:
        </label>
        <DatePicker
          id="datepicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="h:mm aa"
          filterTime={filterPassedTime}
          minTime={minTime}
          maxTime={maxTime}
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          required
        />        
      </div>
      <div>
        <label htmlFor="datepicker" className="block text-gray-700">
          Select date:
        </label>
        <DatePicker
          id="datepicker"
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          filterDate={weekDays}
          withPortal
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>

    {showModal && (
        <div className="fixed block inset-0 flex items-center justify-center z-50 bg-teal-700 opacity-100 overflow-x-hidden overflow-y-auto">
          <div className="bg-white p-6 rounded-lg mx-8">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <p>Request: {request}</p>
            <p>Purpose: {purpose}</p>
            <p>Date and Time: {startDate.toString()}</p>
            <div className="pt-8">
            <button 
            type="button" 
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={""}
            >
              Proceed
              </button>
            <button 
            type="button" 
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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
