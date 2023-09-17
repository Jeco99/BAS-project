import { AiFillCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";

export default function ActionButton({ setRequestData, id }) {
  const handleStatusChangeComplete = (id) => {
    setRequestData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              requestStatus:
                item.requestStatus === "Pending" ? "Completed" : "Completed",
            }
          : item
      )
    );
  };

  const handleStatusChangeIncomplete = (id) => {
    setRequestData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              requestStatus:
                item.requestStatus === "Pending" ? "Incomplete" : "Incomplete",
            }
          : item
      )
    );
  };

  return (
    <div className="flex justify-center space-x-2">
      <button type="button" onClick={() => handleStatusChangeComplete(id)}>
        <AiFillCheckSquare className="w-8 h-auto" />
      </button>
      <button type="button" onClick={() => handleStatusChangeIncomplete(id)}>
        <AiOutlineCloseSquare className="w-8 h-auto" />
      </button>
    </div>
  );
}
