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

  // if (addPost) {
  //   return <BarangayAddPost />;
  // }

  return (
    <div className="main-container">
      <div>
        <h1 className="main-title">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 ml-4 mb-4 text-2xl">
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
          <div className="flex justify-center space-x-2">
            <input
              type="search"
              className="btnRadius w-3/12"
              onClick={() => {
                setAddPost(true);
              }}
            />
            <button
              className="block btn btnRadius p-2"
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
