import { useState } from 'react';
import { GrLinkNext } from "react-icons/gr";

function reportPage (){
const data = [
    { col1: 'January 9, 2020', col2: 'Edward Newgate', col3: 'Barangay Clearance', col4: '12:00-1:00', col5: 'Requirement for NBI', col6: 'denied' },
  { col1: 'March 2, 2021', col2: 'Edward Newgate', col3: 'Certificate of Residence', col4: '8:00-9:00', col5: 'Application of credit card', col6: 'done' },
  {col1: 'July 25, 2023', col2: 'Edward Newgate', col3: 'Barangay clearance', col4: '1:00-2:00', col5: 'Find OnePiece', col6: 'y/n'}
  // Add more data objects here];
];

    const [searchTerm, setSearchTerm] = useState('')
    const [filterValue, setFilterValue] = useState('')
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    };
  
    const handleFilter = (event) => {
      setFilterValue(event.target.value.toLowerCase());
    };
  
    const filteredData = data.filter((item) => {
        const col1Lower = item.col1.toLowerCase();
        const col2Lower = item.col2.toLowerCase();
        const col3Lower = item.col3.toLowerCase();
        const col4Lower = item.col4.toString().toLowerCase();
        const col5Lower = item.col5.toLowerCase();
        const col6Lower = item.col6.toLowerCase();
    
        return (
          (col1Lower.includes(searchTerm) ||
            col2Lower.includes(searchTerm) ||
            col3Lower.includes(searchTerm) ||
            col4Lower.includes(searchTerm) ||
            col5Lower.includes(searchTerm) ||
            col6Lower.includes(searchTerm)) &&
          (filterValue === '' ||
            col1Lower.includes(filterValue) ||
            col2Lower.includes(filterValue) ||
            col3Lower.includes(filterValue) ||
            col4Lower.includes(filterValue) ||
            col5Lower.includes(filterValue) ||
            col6Lower.includes(filterValue))
        );
      });
    
      return (
        <div className="space-y-6 mt-4 p-2 mx-auto max-w-6xl">
            <h1 className='text-3xl mx-auto'>Reports</h1>
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="ml-0 sm:ml-4">
              <label htmlFor="filter" className="block text-gray-700">
                Filter:
              </label>
              <select
                id="filter"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={filterValue}
                onChange={handleFilter}
              >
                <option value="">All</option>
                {/* Add more filter options here */}
              </select>
            </div>
          </div>
    
          <div className="overflow-x-auto bg-gray-50 shadow-lg">
            <table className="table-auto w-full">
              <thead>
                <tr className='table-fixed bg-gray-400 min-w-full'>
                  <th className="px-4 py-2">Timestamp</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Type of Request</th>
                  <th className="px-4 py-2">Appointment Time</th>
                  <th className="px-4 py-2">Purpose</th>
                  <th className="px-4 py-2">Action</th>
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
                    {/* Add more table data (td) elements here */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=' flex justify-center items-center gap-4 '>
              <p className='items-center pt-4'> Page 1</p>  
              <button className='bg-morningGlory px-5 py-2 mt-4 flex gap-2'>
                Next
                <GrLinkNext className='mt-1' size="20px"/>
                </button>
              </div>
          </div>
        </div>
      );
    }

export default reportPage;