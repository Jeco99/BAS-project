import { HiDocument } from "react-icons/hi";
import { useEffect, useState } from "react";
import useIsAuthenticated from "../../hook/useIsAuthenticated";

const chartLoader = async () => {
  const response = await fetch("http://localhost:3001/chart/documents",{
    credentials: "include",
  });
  const barangayPermitData = await response.json();
  return barangayPermitData;
};

export default function NumberOfbarangayPermit() {
  useIsAuthenticated();
  const [barangayPermit, setBarangayPermit] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await chartLoader();
      setBarangayPermit(data);
    }
    init();
  }, []);
  return (
    <div className="chart">
      {barangayPermit.map((item) => (
        <h5 key={item.brgypermit_cnt}>{item.brgypermit_cnt}</h5>
      ))}

      <div>
        <HiDocument size={55} />
        <p>Barangay Permit</p>
      </div>
    </div>
  );
}
