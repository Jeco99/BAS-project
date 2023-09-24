import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const options = [
  'Edit',
  'Delete'
];


export default function DashboardMenuBtn() {
  const [anchorEl, selector] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    selector(event.currentTarget);
  };
  const handleClose = () => {
    selector(null);
  };

  const handleEditBtn = (id) => {
    
  };

  const handleDeleteBtn = (id) => {

  };

  return (
    <div>
      <IconButton
        id=""
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id=""
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === ''} onClick={handleClose}>
            <button type="button">
            {option}
            </button>
            
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}