import { FaFemale } from "react-icons/fa";
import { useEffect, useState } from "react";

const chartLoader = async () => {
  const response = await fetch(
    "http://localhost:3001/chart/barangayCertificate"
  );
  const barangayCertificateData = await response.json();
  return barangayCertificateData;
};

export default function NumberOfbarangayCertificate() {
  const [barangayCertificate, setBarangayCertificate] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await chartLoader();
      setBarangayCertificate(data);
    }
    init();
  }, []);
  return (
    <div className="chart">
      {barangayCertificate.map((item) => (
        <h5 key={item.barangayCertificate_cnt}>
          {item.barangayCertificate_cnt}
        </h5>
      ))}

      <div>
        <FaFemale className="imageChart" />
        <p>barangayCertificate</p>
      </div>
    </div>
  );
}
