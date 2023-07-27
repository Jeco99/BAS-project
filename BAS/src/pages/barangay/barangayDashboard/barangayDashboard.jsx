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

  if (addPost) {
    return <BarangayAddPost />;
  }

  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-4xl py-4 font-semibold">Dashboard</h1>
        <div className="flex gap-4 ml-2">
          <NumberOfFemales />
          <NumberOfMales />
          <BarangayCertificate />
          <BarangayClearance />
          <BarangayPermit />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-2xl sm:text-4xl py-4 font-semibold">
            Latest News/Events
          </h1>
          <button
            className="block text-white bg-beetleGreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => {
              setAddPost(true);
            }}
          >
            Add Post
          </button>
        </div>
        <div className="ml-2">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}
