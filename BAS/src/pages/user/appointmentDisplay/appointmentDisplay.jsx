import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormLabel from "../../../components/label/formLabel";

function AppointmentDisplay() {
  const [startDate, setStartDate] = useState(new Date());
  const [request, setRequest] = useState("");
  const [purpose, setPurpose] = useState("");
  const [selectTime, setSelectTime] = useState("");
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
    <div className="main-container">
      <h1 className="main-title">Appointment</h1>
      <form
        className="space-y-10 editor mx-auto w-auto sm:w-4/12 md:w-6/12 flex flex-col text-gray-800 border border-gray-300 p-4 rounded-lg shadow-lg max-w-2xl"
        onSubmit={handleSubmit}
      >
        <div>
          <FormLabel labelName={'Request'} id={'requestList'} showRequired/>
          <select
            id="RequestList"
            name="RequestList"
            className="inputText"
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
        <FormLabel labelName={'Purpose'} id={'purpose'} showRequired/>
          <textarea
            id="purpose"
            rows="4"
          className="inputText"
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          ></textarea>
        </div>
        <div>
        <FormLabel labelName={' Select time (8:00 - 5:00)'} id={'SelectTime'} showRequired/>
          <select
            id="SelectTime"
            name="SelectTime"
           className="inputText"
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
          <FormLabel labelName={' Select date'} id={'datepicker'} showRequired/>
          <DatePicker
            id="datepicker"
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            filterDate={weekDays}
            minDate={new Date()}
            maxDate={new Date("2023-8-31")}
            withPortal
           className="inputText"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btnRadius"
          >
            Submit
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed block inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 overflow-x-hidden overflow-y-auto">
          <div className="fixed mx-auto w-10/12 flex flex-col text-xl text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-lg max-w-2xl text-xl">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p>Request: {request}</p>
            <p>Purpose: {purpose}</p>
            <p>Time: {selectTime}</p>
            <p>Date: {startDate.toDateString()}</p>
            <div className="pt-8 flex">
              <button
                type="button"
                className="cancelBtn btnRadius"
                onClick={closeModal}
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btnRadius"
                onClick={""}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentDisplay;
