import { AiFillCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";
import { redirect } from "react-router-dom";


export default function ActionButton({ id }) {
  const changeCompleteStatus = async() => {
    await fetch(`http://localhost:3001/appointment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status : "Completed"
      }),
    });
    return redirect("/admin/history");
  }

  const changeInCompleteStatus = async() => {
    await fetch(`http://localhost:3001/appointment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status : "Incomplete"
      }),
    });
    return redirect("/admin/report");
  }

  return (
    <div className="flex justify-center space-x-2">
      <button type="button" onClick={() => changeCompleteStatus()}>
        <AiFillCheckSquare className="w-8 h-auto" />
      </button>
      <button type="button" onClick={() => changeInCompleteStatus(id)}>
        <AiOutlineCloseSquare className="w-8 h-auto" />
      </button>
    </div>
  );
}
