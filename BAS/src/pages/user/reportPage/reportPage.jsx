import { useState } from "react";
/* import { GrLinkNext } from "react-icons/gr"; */
import { CgSearch } from "react-icons/cg";
import { Input } from "@material-tailwind/react";

function reportPage() {
  const data = [
    {
      col1: "January 9, 2020",
      col2: "Edward Newgate",
      col3: "Barangay Clearance",
      col4: "12:00-1:00",
      col5: "Requirement for NBI",
      col6: "",
      col7: "Done"
    },
    {
      col1: "March 2, 2021",
      col2: "Edward Newgate",
      col3: "Certificate of Residence",
      col4: "8:00-9:00",
      col5: "Application of credit card",
      col6: "",
      col7: "done",
    },
    {
      col1: "July 25, 2023",
      col2: "Edward Newgate",
      col3: "Barangay clearance",
      col4: "1:00-2:00",
      col5: "Find OnePiece",
      col6: "y/n",
      col7: "done",
    },
    {
      col1: "February 25, 2023",
      col2: "Edward Newgate",
      col3: "Barangay clearance",
      col4: "10:00-11:00",
      col5: "Go to laugh tale",
      col6: "y/n",
      col7: "done",
    },
    {
      col1: "December 2, 2022",
      col2: "Edward Newgate",
      col3: "Barangay clearance",
      col4: "4:00-5:00",
      col5: "for elbaf",
      col6: "y/n",
      col7: "expired",
    },
    {
      col1: "January 9, 2020",
      col2: "Edward Newgate",
      col3: "Barangay Clearance",
      col4: "12:00-1:00",
      col5: "Requirement for NBI",
      col6: "y/n",
      col7: "expired",
    },
    {
      col1: "March 2, 2021",
      col2: "Edward Newgate",
      col3: "Certificate of Residence",
      col4: "8:00-9:00",
      col5: "Application of credit card",
      col6: "y/n",
      col7: "done"
    },
    {
      col1: "July 25, 2023",
      col2: "Edward Newgate",
      col3: "Barangay clearance",
      col4: "1:00-2:00",
      col5: "Find OnePiece",
      col6: "y/n",
      col7: "done",
    },
    {
      col1: "February 25, 2023",
      col2: "Edward Newgate",
      col3: "Barangay clearance",
      col4: "10:00-11:00",
      col5: "Go to laugh tale",
      col6: "y/n",
      col7: "done",
    },
    {
      col1: "December 2, 2022",
      col2: "Edward Newgate",
      col3: "Barangay clearance",
      col4: "4:00-5:00",
      col5: "for elbaf",
      col6: "y/n",
      col7: "expired",
    },
    // Add more data objects here];
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const handleFilter = (event) => {
    setFilterValue(event.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) => {
    if (filterValue === "date") {
      return item.col1.toLowerCase().includes(searchTerm);
    }
    if (filterValue === "type of request") {
      return item.col3.toLowerCase().includes(searchTerm);
    }

    const col1Lower = item.col1.toLowerCase();
    const col2Lower = item.col2.toLowerCase();
    const col3Lower = item.col3.toLowerCase();
    const col4Lower = item.col4.toString().toLowerCase();
    const col5Lower = item.col5.toLowerCase();
    const col6Lower = item.col6.toLowerCase();
    const col7Lower = item.col7.toLowerCase();

    return (
      (col1Lower.includes(searchTerm) ||
        col2Lower.includes(searchTerm) ||
        col3Lower.includes(searchTerm) ||
        col4Lower.includes(searchTerm) ||
        col5Lower.includes(searchTerm) ||
        col6Lower.includes(searchTerm) ||
        col7Lower.includes(searchTerm)) &&
      (filterValue === "all" ||
        col1Lower.includes(filterValue) ||
        col2Lower.includes(filterValue) ||
        col3Lower.includes(filterValue) ||
        col4Lower.includes(filterValue) ||
        col5Lower.includes(filterValue) ||
        col6Lower.includes(filterValue) ||
        col7Lower.includes(filterValue) )
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
          <form>
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
          </form>
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
            
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.col1}</td>
                <td className="border px-4 py-2">{item.col2}</td>
                <td className="border px-4 py-2">{item.col3}</td>
                <td className="border px-4 py-2">{item.col4}</td>
                <td className="border px-4 py-2">{item.col5}</td>
                <td className="border px-4 py-2">{item.col6}</td>
                <td className="border px-4 py-2">{item.col7}</td>
                {/* Add more table data (td) elements here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page 1 {" "}
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button 
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-beetleGreen rounded-l hover:bg-morningGlory hover:text-black">
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
          <button 
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-beetleGreen border-0 border-l border-gray-700 rounded-r hover:bg-morningGlory hover:text-black">
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

export default reportPage;
