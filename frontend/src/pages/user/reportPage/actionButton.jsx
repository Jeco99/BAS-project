import { AiFillCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";
import { redirect } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";

export default function ActionButton({ id }) {
  const changeCompleteStatus = async () => {
    await fetch(`http://localhost:3001/appointment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Completed",
      }),
    });
    return redirect("/admin/history");
  };

  const changeInCompleteStatus = async () => {
    await fetch(`http://localhost:3001/appointment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Incomplete",
      }),
    });
    return redirect("root/:id/history");
  };

  return (
    <div className="flex justify-center space-x-2">
      <Tooltip
        content="Complete"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button
          className="bg-transparent m-1 p-1 hover:shadow-md hover:bg-beetleGreen"
          onClick={() => changeCompleteStatus()}
        >
          <AiFillCheckSquare className="bg-black w-8 h-auto" />
        </Button>
      </Tooltip>
      <Tooltip
        content="Incomplete"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button
          className="bg-transparent m-1 p-1 hover:shadow-md hover:bg-beetleGreen"
          onClick={() => changeInCompleteStatus()}
        >
          {" "}
          <AiOutlineCloseSquare className="bg-black w-8 h-auto" />
        </Button>
      </Tooltip>
    </div>
  );
}
