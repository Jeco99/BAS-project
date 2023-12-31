import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormLabel from "../../../components/label/formLabel";
import { useNavigate, useParams } from "react-router-dom";
import { appointmentDataValidation } from "../../../utils/appointment_dataValidation";

import { getTomorrowDate, DateFormatted } from "../../../utils/dateConversion";

export default function AppointmentDisplay() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(getTomorrowDate());
  const [request, setRequest] = useState("");
  const [purpose, setPurpose] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const [errors, setErrors] = useState({
    request: "",
    purpose: "",
    selectTime: "",
  });

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const weekDays = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleShowModal = (e) => {
    e.preventDefault();
    if (request != "" && purpose != "" && selectTime != "") {
      setShowModal(true);
    }
    appointmentDataValidation(errors, request, purpose, selectTime, setErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAppointment = await fetch(
      `http://localhost:3001/appointment/create/:${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          request_type: request,
          purpose: purpose,
          appointment_time: selectTime,
          appointment_date: startDate.toDateString(),
          user_id: id,
        }),
      }
    );

    if (newAppointment.status == 201) {
      navigate(`/root/${id}/dashboard`);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Appointment</h1>
      <div className="space-y-10 mx-auto w-auto sm:w-4/12 md:w-10/12 lg:w-7/12 flex flex-col border border-gray-300 p-4 rounded-lg shadow-lg ">
        <div>
          <FormLabel labelName={"Request"} id={"requestList"} showRequired />
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
          {errors.request && <small>Request is required!</small>}
        </div>

        <div>
          <FormLabel labelName={"Purpose"} id={"purpose"} showRequired />
          <textarea
            id="purpose"
            rows="4"
            className="inputText"
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          ></textarea>
          {errors.purpose && <small>Purpose is required!</small>}
        </div>
        <div>
          <FormLabel
            labelName={" Select time (8:00 - 5:00)"}
            id={"SelectTime"}
            showRequired
          />
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
          {errors.selectTime && <small>Time is required!</small>}
        </div>
        <div>
          <FormLabel
            labelName={" Select date"}
            id={"datepicker"}
            showRequired
          />
          <DatePicker
            id="datepicker"
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            filterDate={weekDays}
            minDate={new Date()}
            maxDate={new Date("2050-12-31")}
            withPortal
            className="inputText"
            required
          />
          {/* {errors.request && <small>Region is required!</small>} */}
        </div>
        <div>
          <button
            type="button"
            className="btn btnRadius"
            onClick={handleShowModal}
          >
            Submit
          </button>
        </div>
      </div>

      {showModal && (
        <form
          className="fixed block inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 overflow-x-hidden overflow-y-auto z-50"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="fixed mx-auto w-10/12 flex flex-col text-xl text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-lg max-w-2xl text-xl">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p>Request: {request}</p>
            <p>Purpose: {purpose}</p>
            <p>Time: {selectTime}</p>
            <p>Date: {DateFormatted(startDate)}</p>
            <div className="pt-8 flex">
              <button
                type="button"
                className="cancelBtn btnRadius"
                onClick={closeModal}
              >
                Back
              </button>
              <button type="submit" className="btn btnRadius">
                Proceed
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
