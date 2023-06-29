import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
          sx={{
            mb: { xs: 2, sm: 3 },
            position: "static",
            boxShadow: "none",
            ...props.styles,
          }}
        >
          <Toolbar>
            <Link to="/" style={{ color: "inherit" }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{ pr: 0 }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {props.headingTitle}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
