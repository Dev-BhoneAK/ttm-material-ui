import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function DetailAppBar(props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          sx={{
            left: "0",
            top: "0",
            backgroundColor: "rgba(0,0,0,0.3)",
            maxWidth: "md",
            px: { xs: 0 },
            margin: "0 auto",
          }}
        >
          <Toolbar>
            <Link to="/" style={{ color: "inherit" }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                color="inherit"
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
