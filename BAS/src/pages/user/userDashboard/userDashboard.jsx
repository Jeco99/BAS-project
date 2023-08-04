import NumberOfFemales from "../../../components/chart/numberofFemale";
import NumberOfMales  from "../../../components/chart/numberofMale";
import BarangayClearance from "../../../components/chart/numberofBarangayClearance";
import BarangayCertificate from "../../../components/chart/numberofBarangayCertificate";
import BarangayPermit from "../../../components/chart/numberofBarangayPermit";

import Post from "../../../components/post/post";

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