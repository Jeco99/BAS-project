import { useState } from "react";
import BarangayAddPost from "./addpost";

import NumberOfFemales from "../../../components/chart/numberofFemale";
import NumberOfMales from "../../../components/chart/numberofMale";
import BarangayClearance from "../../../components/chart/numberofBarangayClearance";
import BarangayCertificate from "../../../components/chart/numberofBarangayCertificate";
import BarangayPermit from "../../../components/chart/numberofBarangayPermit";

import Post from "../../../components/post/post";

export default function BarangayDashboard() {
  const [addPost, setAddPost] = useState(false);

  return (
    <div className="main-container">
      <div>
        <h1 className="main-title">
          Dashboard
        </h1>
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
          <h1 className="main-title">Latest News/Events</h1>
          <div className="flex justify-center space-x-2 mx-auto md:mx-32 lg:mx-40">
            <input
              type="search"
              className=" w-full btnRadius w-3/12"
              onClick={() => {
                setAddPost(true);
              }}
            />
            <button
              className="btn btnRadius"
              type="button"
              onClick={() => {
                setAddPost(true);
              }}
            >
              Add Post
            </button>
          </div>
        </div>
        {addPost && <BarangayAddPost setAddPost={setAddPost} />}
        <div className="ml-4 text-2xl">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
