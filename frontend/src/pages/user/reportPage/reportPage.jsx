import { useState, useEffect } from "react";
import { CgSearch } from "react-icons/cg";
import { Input } from "@material-tailwind/react";
import ActionButton from "./actionButton";
import { useParams } from "react-router-dom";
import { convertTo12HoursFormat } from "../../../utils/timeConversion";
import useIsAuthenticated from "../../../hook/useIsAuthenticated";


const appointmentLoader = async (id) => {
  const response = await fetch(`http://localhost:3001/appointment/${id}`,{
    credentials: "include",
  });
  const appointmentData = await response.json();
  return appointmentData;
};

function ReportPage() {
  useIsAuthenticated();
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
  // const handleFilter = (event) => {
  //   setFilterValue(event.target.value.toLowerCase());
  // };

  // console.log(data);
  // console.log(filterValue)

  const filteredData = data.filter((item) => {
    const searchFilter = searchTerm.toLowerCase(); 
    const appointment_date_created_filter = item.appointment_date_created.toLowerCase();
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
      appointment_date_created_filter.includes(searchFilter) || 
      request_type_filter.includes(searchFilter) ||
      status_filter.includes(searchFilter) || 
      appointment_time_filter.includes(searchFilter) || 
      appointment_date_filter.includes(searchFilter) 
    )
  })

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
              <th className="px-4 py-2">Appointment Date</th>
              <th className="px-4 py-2">Purpose</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Status</th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="text-lg">
            {filteredData.map((item) => (
              <tr key={item.appointment_id}>
                <td className="border px-4 py-2">{`${item.appointment_date_created.substr(
                  0,
                  10
                )} ${convertTo12HoursFormat(
                  item.appointment_time_created
                )}`}</td>
                <td className="border px-4 py-2">{item.fullname}</td>
                <td className="border px-4 py-2">{item.request_type}</td>
                <td className="border px-4 py-2">{item.appointment_time}</td>
                <td className="border px-4 py-2">{item.appointment_date}</td>
                <td className="border px-4 py-2">{item.purpose}</td>
                <td className="border">
                  <ActionButton
                    appointment_id={item.appointment_id}
                    user_id={item.user_id}
                  />
                </td>
                <td className="border px-4 py-2">{item.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center">
       
            
      </div>
    </div>
  );
}

export default ReportPage;
