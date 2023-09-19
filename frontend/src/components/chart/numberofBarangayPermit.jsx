import { FaFemale } from "react-icons/fa";
import { useEffect, useState } from "react";

const chartLoader = async () => {
  const response = await fetch("http://localhost:3001/chart/barangayPermit");
  const barangayPermitData = await response.json();
  return barangayPermitData;
};

export default function NumberOfbarangayPermit() {
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
        <h5 key={item.barangayPermit_cnt}>{item.barangayPermit_cnt}</h5>
      ))}

      <div>
        <FaFemale className="imageChart" />
        <p>barangayPermit</p>
      </div>
    </div>
  );
}
