import { FaFemale } from "react-icons/fa";
import { useEffect, useState } from "react";

const chartLoader = async () => {
  const response = await fetch("http://localhost:3001/chart/female");
  const femaleData = await response.json();
  return femaleData;
};

export default function NumberOfFemales() {
  const [female, setFemale] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await chartLoader();
      setFemale(data);
    }
    init();
  }, []);
  return (
    <div className="chart">
      {female.map((item) => (
        <h5 key={item.female_cnt}>{item.female_cnt}</h5>
      ))}

      <div>
        <FaFemale className="imageChart" />
        <p>Female</p>
      </div>
    </div>
  );
}
