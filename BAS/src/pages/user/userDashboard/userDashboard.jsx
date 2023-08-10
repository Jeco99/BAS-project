import NumberOfFemales from "../../../components/chart/numberofFemale";
import NumberOfMales from "../../../components/chart/numberofMale";
import BarangayClearance from "../../../components/chart/numberofBarangayClearance";
import BarangayCertificate from "../../../components/chart/numberofBarangayCertificate";
import BarangayPermit from "../../../components/chart/numberofBarangayPermit";

import Post from "../../../components/post/post";

export default function UserDashboard() {
  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-5xl py-4 font-semibold ml-6 mb-4 mt-2 ">
          Dashboard
        </h1>
        <div className="flex gap-4 ml-6 mb-4 text-2xl flex-col sm:flex-row">
          <NumberOfFemales />
          <NumberOfMales />
          <BarangayCertificate />
          <BarangayClearance />
          <BarangayPermit />
        </div>
      </div>
      <div>
        <h1 className="text-2xl sm:text-5xl py-4 font-semibold ml-6">
          Latest News/Events
        </h1>
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
        </div>
      </div>
    </>
  );
}
