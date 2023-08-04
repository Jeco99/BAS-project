import NumberOfFemales from "../../../components/chart/numberofFemale";
import NumberOfMales from "../../../components/chart/numberofMale";
import BarangayClearance from "../../../components/chart/numberofBarangayClearance";
import BarangayCertificate from "../../../components/chart/numberofBarangayCertificate";
import BarangayPermit from "../../../components/chart/numberofBarangayPermit";

import Post from "../../../components/post/post";

<<<<<<< HEAD
export default function UserDashboard() {
  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-5xl py-4 font-semibold ml-6 mb-4 mt-2">
          Dashboard
        </h1>
        <div className="flex gap-4 ml-6 mb-4 text-2xl">
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
=======
export default function UserDashboard(){
    return(
        <div className="marginMain">
            <div>
                <h1 className="pageHeader">Dashboard</h1>
                <div className="flex gap-4 ml-2">
                    <NumberOfFemales />
                    <NumberOfMales />
                    <BarangayCertificate />
                    <BarangayClearance />
                    <BarangayPermit />
                </div>
            </div>
            <div>
                <h1 className="pageHeader">Latest News/Events</h1>
               <div className="ml-2">
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
    )
}
>>>>>>> 3671c12fec6d461aed637bc938cc2d0766a66118
