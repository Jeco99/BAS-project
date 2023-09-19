import { FaFemale } from "react-icons/fa";
import { useEffect, useState } from "react";

const chartLoader = async () => {
  const response = await fetch("http://localhost:3001/chart/barangayClearance");
  const barangayClearanceData = await response.json();
  return barangayClearanceData;
};

export default function NumberOfbarangayClearance() {
  const [barangayClearance, setBarangayClearance] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await chartLoader();
      setBarangayClearance(data);
    }
    init();
  }, []);
  return (
    <div className="chart">
      {barangayClearance.map((item) => (
        <h5 key={item.barangayClearance_cnt}>{item.barangayClearance_cnt}</h5>
      ))}

      <div>
        <FaFemale className="imageChart" />
        <p>barangayClearance</p>
      </div>
    </div>
  );
}
