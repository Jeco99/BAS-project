import { HiDocument } from "react-icons/hi";
import { useEffect, useState } from "react";

const chartLoader = async () => {
  const response = await fetch(
    "http://localhost:3001/chart/documents"
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
        <h5 key={item.brgycertificate_cnt}>
          {item.brgycertificate_cnt}
        </h5>
      ))}

      <div>
        <HiDocument className="imageChart" />
        <p>Barangay Certificate</p>
      </div>
    </div>
  );
}
