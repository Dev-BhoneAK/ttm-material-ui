import React from "react";
import CustomIcon from "./CustomIcon";
import { ListItemIcon } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function UserActionMenu({ open, handleClose }) {
  return (
    <Menu
    //   id="long-menu"
    //   MenuListProps={{
    //     "aria-labelledby": "long-button",
    //   }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: "20ch",
        },
      }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>star</ListItemIcon>
        Set Favorite
      </MenuItem>
      <Divider />
      {/* <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem> */}
    </Menu>
  );
}

export default UserActionMenu;
