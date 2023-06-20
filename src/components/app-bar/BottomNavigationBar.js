import * as React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedIcon from "@mui/icons-material/Feed";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import { Link, useLocation } from "react-router-dom";

export default function BottomNavigationBar() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="News"
          icon={<FeedIcon />}
          component={Link}
          to="/news"
        />
        <BottomNavigationAction label="Novels" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Mobile TV" icon={<LiveTvIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
