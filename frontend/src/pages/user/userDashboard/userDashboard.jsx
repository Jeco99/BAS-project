import { useState, useEffect } from "react";
import BarangayAddPost from "./addpost";
import { CgSearch } from "react-icons/cg";
import { Input } from "@material-tailwind/react";

import NumberOfFemales from "../../../components/chart/numberofFemale";
import NumberOfMales from "../../../components/chart/numberofMale";
import BarangayClearance from "../../../components/chart/numberofBarangayClearance";
import BarangayCertificate from "../../../components/chart/numberofBarangayCertificate";
import BarangayPermit from "../../../components/chart/numberofBarangayPermit";

import Post from "../../../components/post/post";
import { useParams } from "react-router-dom";

const userDetails_Selected_Loader = async (id) => {
  const response = await fetch(`http://localhost:3001/root/${id}`);
  const userDetails_data = await response.json();
  return userDetails_data;
};

export default function UserDashboard() {
 
  const [addPost, setAddPost] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await userDetails_Selected_Loader(id);
      setData(data);
    }
    init();
  }, []);

  // console.log(data);
  return (
    <div className="main-container">
      <div>
        <h1 className="main-title">Dashboard</h1>
        <div className="chartContainer">
          <NumberOfFemales />
          <NumberOfMales />
          <BarangayCertificate />
          <BarangayClearance />
          <BarangayPermit />
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="main-title">Latest News/Events</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="relative">
                <Input
                  label="Type to search"
                  // value={searchTerm}
                  // onChange={handleSearch}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <CgSearch className="text-gray-400" />
                </div>
              </div>
              {data.user_type == "admin" ? (
                <button
                  className="btn btnRadius ml-1"
                  type="button"
                  onClick={() => {
                    setAddPost(true);
                  }}
                >
                  Add Post
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        {addPost && <BarangayAddPost setAddPost={setAddPost} data={data} />}
        <div className="ml-4 text-2xl">
          <Post />
        </div>
      </div>
    </div>
  );
}
