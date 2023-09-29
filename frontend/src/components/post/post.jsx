import { useEffect, useState } from "react";
import DashboardMenuBtn from "../../pages/user/userDashboard/DashboardMenuBtn";
import { useParams } from "react-router-dom";

const postLoader = async (id) => {
  const response = await fetch(`http://localhost:3001/post/${id}`);
  const postData = await response.json();
  return postData;
};

export default function Post() {
  const [postData, setPostData] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    async function init() {
      const data = await postLoader(id);
      setPostData(data);
    }
    init();
  }, []);

  const convertTo12HoursFormat = (timeIn24Hrs) => {
    const timeComponents = timeIn24Hrs.split(":");
    const hours = parseInt(timeComponents[0]);
    const minutes = timeComponents[1];

    const period = hours >= 12 ? "PM" : "AM";
    const convertto12hrs = hours % 12 || 12;
    const timeResults = `${convertto12hrs}:${minutes} ${period}`;

    return timeResults;
  };

  return (
    <>
      {postData.map((items) => (
        <div className="relative border rounded-lg p-5 m-2 hover:bg-gray-100" key={items.post_id}>
          <h1 className="text-base sm:text-xl">{items.title}</h1>
          <h6 className="text-sm sm:text-base text-gray-400">
            {items.post_date_created.substr(0, 10)} |{" "}
            {convertTo12HoursFormat(items.post_time_created)}
            <div className="absolute right-0 top-0 mb-8 flex px-2 rounded-md">
              <DashboardMenuBtn post_id={items.post_id}/>
            </div>
          </h6>
          <p className="text-sm sm:text-base">{items.description}</p>
        </div>
      ))}
    </>
  );
}
