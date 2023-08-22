import { useState } from "react";
/* import { GrLinkNext } from "react-icons/gr"; */
import { CgSearch } from "react-icons/cg";
import { Input } from "@material-tailwind/react";
import reportData from "./reportData";
import ActionButton from "./actionButton";

function ReportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [requestData, setRequestData] = useState(reportData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const handleFilter = (event) => {
    setFilterValue(event.target.value.toLowerCase());
  };

  const filteredData = requestData.filter((item) => {
    if (filterValue === "date") {
      return item.timestamp.toLowerCase().includes(searchTerm);
    }
    if (filterValue === "type of request") {
      return item.type0fRequest.toLowerCase().includes(searchTerm);
    }

    const timestampLower = item.timestamp.toLowerCase();
    const nameLower = item.name.toLowerCase();
    const type0fRequestLower = item.type0fRequest.toLowerCase();
    const timeOfRequestLower = item.timeOfRequest.toString().toLowerCase();
    const purposeLower = item.purpose.toLowerCase();
    const actionButtonLower = item.actionButton.toLowerCase();
    const requestStatusLower = item.requestStatus.toLowerCase();

    return (
      (timestampLower.includes(searchTerm) ||
        nameLower.includes(searchTerm) ||
        type0fRequestLower.includes(searchTerm) ||
        timeOfRequestLower.includes(searchTerm) ||
        purposeLower.includes(searchTerm) ||
        actionButtonLower.includes(searchTerm) ||
        requestStatusLower.includes(searchTerm)) &&
      (filterValue === "all" ||
        timestampLower.includes(filterValue) ||
        nameLower.includes(filterValue) ||
        type0fRequestLower.includes(filterValue) ||
        timeOfRequestLower.includes(filterValue) ||
        purposeLower.includes(filterValue) ||
        actionButtonLower.includes(filterValue) ||
        requestStatusLower.includes(filterValue))
    );
  });

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
        <div className="relative pl-2">
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
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.timestamp}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.type0fRequest}</td>
                <td className="border px-4 py-2">{item.timeOfRequest}</td>
                <td className="border px-4 py-2">{item.purpose}</td>
                <td className="border px-4 py-2">
                  <ActionButton setRequestData={setRequestData} id={item.id} />
                </td>
                <td className="border px-4 py-2">{item.requestStatus}</td>
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
