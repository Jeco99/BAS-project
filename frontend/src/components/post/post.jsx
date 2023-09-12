import { useEffect, useState } from "react";

const postLoader = async () => {
  const response = await fetch("http://localhost:3001/post");
  const postData = await response.json();
  return postData;
};

export default function Post() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await postLoader();
      setPostData(data);
    }
    init();
  }, []);

  return (
    <>
      {postData.map((items) => (
        <div className="border rounded-lg p-5 m-2" key={items.post_id}>
          <h1 className="text-base sm:text-xl" >{items.title}</h1>
          <h6 className="text-sm sm:text-base text-gray-400">
           {items.post_date_created} | {items.post_time_created}
          </h6>
          <p className="text-sm sm:text-base">
            {items.description}
          </p>
        </div>
      ))}
    </>
  );
}
