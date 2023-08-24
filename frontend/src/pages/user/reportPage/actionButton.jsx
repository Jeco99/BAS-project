import { useState } from "react";
import { AiFillCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";


export default function ActionButton({setRequestData, id}){
  const handleStatusChangeComplete = (id) => {
    setRequestData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, requestStatus: item.requestStatus === 'Pending' ? 'Completed' : 'Completed' }
          : item
      )
    );
  };

  const handleStatusChangeIncomplete = (id) => {
    setRequestData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, requestStatus: item.requestStatus === 'Pending' ? 'Incomplete' : 'Incomplete' }
          : item
      )
    );
  };

    return(
        <div>
        <button type="button" onClick={()=>handleStatusChangeComplete(id)}><AiFillCheckSquare/></button>
        <button type="button" onClick={()=>handleStatusChangeIncomplete(id)}><AiOutlineCloseSquare/></button>
        </div>
    )
}