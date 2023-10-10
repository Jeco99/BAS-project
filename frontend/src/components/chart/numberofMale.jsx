import { FaMale } from "react-icons/fa";
import { useEffect, useState } from "react";
import useIsAuthenticated from "../../hook/useIsAuthenticated";

const chartLoader = async () => {
  const response = await fetch("http://localhost:3001/chart/sex", {
    credentials: "include",
  });
  const maleData = await response.json();
  return maleData;
};

export default function NumberOfMales() {
  useIsAuthenticated();
  const [male, setMale] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await chartLoader();
      setMale(data);
    }
    init();
  }, []);
  return (
    <div className="chart">
      {male.map((item) => (
        <h5 key={item.male_cnt}>{item.male_cnt}</h5>
      ))}

      <div>
        <FaMale  size={45} />
        <p>Male</p>
      </div>
    </div>
  );
}
