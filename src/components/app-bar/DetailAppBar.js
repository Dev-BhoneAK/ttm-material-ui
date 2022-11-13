import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function DetailAppBar(props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <Box position="absolute" sx={{ left: 0, top: 0, margin: "auto" }}>
          <AppBar
            position="fixed"
            sx={{
              // padding: "2em",
              // left: 0,
              // top: "0px",
              // transform: "translate(-27%)",
              backgroundColor: "rgba(0,0,0,0.3)",
              width: "50%",
            }}
          >
            <Toolbar>
              <Typography variant="h6" component="div">
                Scroll to hide App bar
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </HideOnScroll>
    </>
  );
}
