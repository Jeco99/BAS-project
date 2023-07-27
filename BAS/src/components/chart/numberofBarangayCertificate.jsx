import {FaFemale  } from "react-icons/fa";

export default function BarangayCertificate(){
    return(
<div className="flex space-x-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <h5 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">20</h5>
    <div className="flex flex-col">
        <FaFemale size={35}/>
    <p className="font-normal text-gray-700 items-center">Female</p>    
    </div>
</div>

    )
}