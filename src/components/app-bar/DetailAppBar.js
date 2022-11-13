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
  const appBarRef = React.useRef(null);

  React.useEffect(() => {
    let oldScrollPosition = window.scrollY;

    window.addEventListener("scroll", handleScroll(oldScrollPosition));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (prevScrollPos) => () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      console.log(currentScrollPos + " is greater than " + prevScrollPos);
      appBarRef.current.style.transform = "translateY(0)";
    } else {
      console.log(currentScrollPos + " is less than " + prevScrollPos);
      appBarRef.current.style.transform = "translateY(-200px)";
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <>
      <CssBaseline />
      {/* <HideOnScroll {...props}> */}
      <AppBar
        position="absolute"
        // transitionProperty="transform"
        // transitionDuration=".3s"
        // transitionTimingFunction="ease-in-out"
        ref={appBarRef}
        sx={{
          left: 0,
          top: 0,
          transform: "translateY(0)",
          transitionProperty: "transform",
          transitionDuration: "3s",
          transitionTimingFunction: "ease-in-out",
          backgroundColor: "rgba(0,0,0,0.3)",
          // width: "50%",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to hide App bar
          </Typography>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
    </>
  );
}
