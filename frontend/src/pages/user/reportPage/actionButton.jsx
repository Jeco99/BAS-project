import { AiFillCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";

export default function ActionButton({ appointment_id, user_id }) {
  const navigate = useNavigate();
  const changeCompleteStatus = async () => {
    const completeStatus = await fetch(
      `http://localhost:3001/appointment/${appointment_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "Completed",
        }),
      }
    );
    if (completeStatus.status == 201) {
      navigate(`/root/${user_id}/adminhistory`);
    }
  };

  const changeInCompleteStatus = async () => {
    const IncompleteStatus = await fetch(
      `http://localhost:3001/appointment/${appointment_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "Incomplete",
        }),
      }
    );
    if (IncompleteStatus.status == 201) {
      navigate(`/root/${user_id}/adminhistory`);
    }
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
