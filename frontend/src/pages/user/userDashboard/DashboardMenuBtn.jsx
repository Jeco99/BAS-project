import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditPost from "./editpost";
import { useParams } from "react-router-dom";

const options = ["Edit", "Delete"];

export default function DashboardMenuBtn({ post_id }) {
  const [anchorEl, selector] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const open = Boolean(anchorEl);
  const { id } = useParams();

  const handleClick = (event) => {
    selector(event.currentTarget);
  };
  const handleClose = () => {
    selector(null);
  };

  const handleEditBtn = () => {
    setEditModalOpen(true);
  };

  const handleDeleteBtn = async () => {
    try {
      await fetch(`http://localhost:3001/post/delete/${post_id}`, {
        method: "DELETE",
      });

      return (location.href = `/root/${id}/dashboard`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <IconButton
        id="ellipsisBtn"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={option == "Edit" ? handleEditBtn : handleDeleteBtn}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {isEditModalOpen && <EditPost post_id={post_id} />}
    </div>
  );
}
