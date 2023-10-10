import { FaFemale } from "react-icons/fa";
import { useEffect, useState } from "react";
import useIsAuthenticated from "../../hook/useIsAuthenticated";

const chartLoader = async () => {
  const response = await fetch("http://localhost:3001/chart/sex", {
    credentials: "include",
  });
  const femaleData = await response.json();
  return femaleData;
};

export default function NumberOfFemales() {
  useIsAuthenticated();
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
        <FaFemale size={45} />
        <p>Female</p>
      </div>
    </div>
  );
}
