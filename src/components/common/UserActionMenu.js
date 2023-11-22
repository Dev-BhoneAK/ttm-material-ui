import React, { useState } from "react";
import { Star } from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  Snackbar,
  Divider,
  Button,
} from "@mui/material";

import SocialIconsContainer from "./SocialIconsContainer";

function UserActionMenu({ open, anchorEl, handleClose }) {
  const [favorite, setFavorite] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
    setSnackBarOpen(true);
    // handleClose();
  };

  let favoriteChar = favorite ? "Unset" : "Set";

  return (
    <>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleFavorite}>
          <ListItemIcon color="red">
            <Star fontSize="small" sx={{ color: favorite && "#f29911" }} />
          </ListItemIcon>
          {favoriteChar} Favorite
        </MenuItem>
        <Divider />
        {/* <MenuItem> */}
        <SocialIconsContainer />
        {/* </MenuItem> */}
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

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackBarOpen(false)}
        sx={{
          background: "inherit",
          "& .MuiAlert-message": { textAlign: "center", width: "inherit" },
        }}
        message={
          favorite ? "Added To Favorite List" : "Removed From Favorite List"
        }
        action={
          favorite && (
            <Button color="primary" size="small" onClick={handleClose}>
              View
            </Button>
          )
        }
      />
    </>
  );
}

export default UserActionMenu;
