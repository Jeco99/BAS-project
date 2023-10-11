import { useState, useEffect } from "react";
import { convertTo12HoursFormat } from "../../../utils/timeConversion";
import { useParams } from "react-router-dom";
import useIsAuthenticated from "../../../hook/useIsAuthenticated";
import { CgSearch } from "react-icons/cg";
import { Input } from "@material-tailwind/react";


const historyLoader = async (id) => {
  const response = await fetch(`http://localhost:3001/history/user/${id}`,{
    credentials:"include",
  });
  const completedStatusData = await response.json();
  return completedStatusData;
};

export default function UserHistory() {
  useIsAuthenticated();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function init() {
      const data = await historyLoader(id);
      setData(data);
    }
    init();
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const filteredData = data.filter((item) => {
    const searchFilter = searchTerm.toLowerCase(); 
    const fullName_filter = item.fullname.toLowerCase();
    const purpose_filter = item.purpose.toLowerCase();
    const request_type_filter = item.request_type.toLowerCase();
    const status_filter = item.status.toLowerCase();
    const appointment_time_filter = item.appointment_time.toLowerCase();
    const appointment_date_filter = item.appointment_date.toLowerCase();

    // if(filterValue == 'oldesttolatest'){
    //   return appointment_date_created_filter.sort();
    // }

    if(searchFilter === ''){
      return true
    }

  
    return(
      fullName_filter.includes(searchFilter) ||
      purpose_filter.includes(searchFilter) || 
      request_type_filter.includes(searchFilter) ||
      status_filter.includes(searchFilter) || 
      appointment_time_filter.includes(searchFilter) || 
      appointment_date_filter.includes(searchFilter) 
    )
  })
  return (
    <div className="main-container">
      <h1 className="main-title">History</h1>
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
        {/* <div className="relative p-2">
          <select
            id="filter"
            className="px-4 py-2 px-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filterValue}
            onChange={handleFilter}
          >
            <option value="all">All</option>
            <option value="latesttooldest">Latest to Oldest</option>
            <option value="oldesttolatest">Oldest to Latest</option>
          </select>
        </div> */}
      </div>
      <div className="overflow-x-auto bg-gray-50 shadow-lg mb-7">
        <table className="table-auto w-full">
          <thead>
            <tr className="table-fixed bg-gray-400 min-w-full">
              <th className="px-4 py-2">Timestamp</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type of Request</th>
              <th className="px-4 py-2">Appointment Time</th>
              <th className="px-4 py-2">Purpose</th>
              <th className="px-4 py-2">Status</th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="text-lg">
            {filteredData.map((item) => (
              <tr key={item.appointment_id}>
                <td className="border px-4 py-2">{`${item.approval_date_created.substr(
                  0,
                  10
                )} ${convertTo12HoursFormat(item.approval_time_created)}`}</td>
                <td className="border px-4 py-2">{item.fullname}</td>
                <td className="border px-4 py-2">{item.request_type}</td>
                <td className="border px-4 py-2">{item.appointment_time}</td>
                <td className="border px-4 py-2">{item.purpose}</td>
                <td
                  className={`border px-4 py-2 bg-dark ${
                    item.status == "Completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
                {/* Add more table data (td) elements here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-col items-center">
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
      </div> */}
    </div>
  );
}
