import React from "react";
import { Stack, Box } from "@mui/material";
import IconButton from "@mui/material";

import UserActionMenu from "./UserActionMenu";
import CustomIcon from "./CustomIcon";
import CustomTypo from "./CustomTypo";

export default function ContentInfo(props) {
  const iconStyles = {
    fontSize: { xs: "1.3rem", md: "1.8rem" },
    marginRight: { xs: "0.1rem", md: "0.2rem" },
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: { xs: 2 }, py: { xs: 2 } }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomIcon icon="calendar_month" styles={iconStyles} />
        <CustomTypo variant="subtitle1" title={props?.publishedDate} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomIcon icon="visibility" styles={iconStyles} />
        <CustomTypo variant="subtitle1" title={props?.viewCount} />
      </Stack>
      <IconButton
        // aria-label="more"
        // id="long-button"
        // aria-controls={open ? "long-menu" : undefined}
        // aria-expanded={open ? "true" : undefined}
        // aria-haspopup="true"
        onClick={handleClick}
      >
        <CustomIcon icon="more_horiz" />
      </IconButton>
      <UserActionMenu open={open} handleClose={handleClose} />
      {/* <IconButton
        size="large"
        edge="end"
        aria-label="back-to-home"
        color="inherit"
        sx={{ pr: { xs: 0, sm: 1.5 } }}
      >
        <CustomIcon icon="more_horiz" />
      </IconButton> */}
    </Stack>
  );
}
