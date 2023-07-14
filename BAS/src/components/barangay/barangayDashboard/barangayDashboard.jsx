import { useState } from "react";
import BarangayAddPost from "./addpost";

export default function BarangayDashboard() {
  const [addPost, setAddPost] = useState(false);

  if (addPost) {
    return <BarangayAddPost />
  }

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <p>Some chart</p>
      </div>
      <div className="flex space-between">
        <div>
          <h1>Latest News/Events</h1>
        </div>
        <div>
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => {
            setAddPost(true);
          }}
        >
          Add Post
        </button>
        </div>

        {/* where display the admin post */}
      </div>
    </>
  );
}
