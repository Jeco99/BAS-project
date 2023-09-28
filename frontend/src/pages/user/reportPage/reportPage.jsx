import { useState, useEffect } from "react";
import { CgSearch } from "react-icons/cg";
import { Input } from "@material-tailwind/react";
import ActionButton from "./actionButton";
import { useParams } from "react-router-dom";
import { convertTo12HoursFormat } from "../../../utils/timeConversion";


const appointmentLoader = async (id) =>{
  const response = await fetch(`http://localhost:3001/appointment/${id}`);
  const appointmentData = await response.json();
  return appointmentData
}

function ReportPage() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const { id } = useParams();

  useEffect(() => {
    async function init() {
      const data = await appointmentLoader(id);
      setData(data);
    }
    init();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const handleFilter = (event) => {
    setFilterValue(event.target.value.toLowerCase());
  };

  // const filteredData = appointData.filter((item) => {
  //   if (filterValue === "date") {
  //     return item.appointment_date_created.toLowerCase().includes(searchTerm);
  //   }
  //   if (filterValue === "type of request") {
  //     return item.request_type.toLowerCase().includes(searchTerm);
  //   }

  //   const timestampLower = item.timestamp.toLowerCase();
  //   const nameLower = item.name.toLowerCase();
  //   const type0fRequestLower = item.type0fRequest.toLowerCase();
  //   const timeOfRequestLower = item.timeOfRequest.toString().toLowerCase();
  //   const purposeLower = item.purpose.toLowerCase();
  //   const actionButtonLower = item.actionButton.toLowerCase();
  //   const requestStatusLower = item.requestStatus.toLowerCase();

  //   return (
  //     (timestampLower.includes(searchTerm) ||
  //       nameLower.includes(searchTerm) ||
  //       type0fRequestLower.includes(searchTerm) ||
  //       timeOfRequestLower.includes(searchTerm) ||
  //       purposeLower.includes(searchTerm) ||
  //       actionButtonLower.includes(searchTerm) ||
  //       requestStatusLower.includes(searchTerm)) &&
  //     (filterValue === "all" ||
  //       timestampLower.includes(filterValue) ||
  //       nameLower.includes(filterValue) ||
  //       type0fRequestLower.includes(filterValue) ||
  //       timeOfRequestLower.includes(filterValue) ||
  //       purposeLower.includes(filterValue) ||
  //       actionButtonLower.includes(filterValue) ||
  //       requestStatusLower.includes(filterValue))
  //   );
  // });

  return (
    <div className="main-container">
      <h1 className="main-title">Reports</h1>
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <div className="relative">
          <Input
            label="Type to search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <CgSearch className="text-gray-400" />
          </div>
        </div>
        <div className="relative p-2">
          <select
            id="filter"
            className="px-4 py-2 px-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filterValue}
            onChange={handleFilter}
          >
            <option value="all">All</option>
            <option value="date">Date</option>
            <option value="type of request">Type of request</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-gray-50 shadow-lg">
        <table className="table-auto w-full">
          <thead>
            <tr className="table-fixed bg-gray-400 min-w-full">
              <th className="px-4 py-2">Timestamp</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type of Request</th>
              <th className="px-4 py-2">Appointment Time</th>
              <th className="px-4 py-2">Purpose</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Status</th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="text-lg">
            {data.map((item) => (
              <tr key={item.appointment_id}>
                <td className="border px-4 py-2">{`${item.appointment_date_created.substr(0,10)} ${convertTo12HoursFormat(item.appointment_time_created)}`}</td>
                <td className="border px-4 py-2">{item.fullname}</td>
                <td className="border px-4 py-2">{item.request_type}</td>
                <td className="border px-4 py-2">{item.appointment_time}</td>
                <td className="border px-4 py-2">{item.purpose}</td>
                <td className="border">
                  <ActionButton id={item.appointment_id} />
                </td>
                <td className="border px-4 py-2">{item.status}</td>
                {/* Add more table data (td) elements here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page 1{" "}
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-beetleGreen rounded-l hover:bg-morningGlory hover:text-black">
            <svg
              className="w-3.5 h-3.5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-beetleGreen border-0 border-l border-gray-700 rounded-r hover:bg-morningGlory hover:text-black">
            Next
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;
