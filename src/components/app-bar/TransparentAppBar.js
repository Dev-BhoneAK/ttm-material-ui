import React from "react";
import { Container, Slide } from "@mui/material";

import SlidingAppBar from "./SlidingAppBar";
import DetailAppBar from "./DetailAppBar";

export default function TransparentAppBar(props) {
  return (
    <>
      <Container sx={{ position: "relative", px: { xs: 0 } }}>
        {/* <SlidingAppBar showAppBar={props?.showAppBar}> */}
        <DetailAppBar
          showAppBar={props.showAppBar}
          styles={{
            backgroundColor: "rgba(0,0,0,0.3)",
            position: "fixed",
            left: "0",
            top: "0",
            maxWidth: "md",
            margin: "0 auto",
          }}
        />
        {/* </SlidingAppBar> */}
        {/* <Slide appear={false} direction="down" in={props?.showAppBar}> */}
        {/* <DetailAppBar
            styles={{
              backgroundColor: "rgba(0,0,0,0.3)",
              position: "fixed",
              left: "0",
              top: "0",
              maxWidth: "md",
              margin: "0 auto",
            }}
          /> */}
        {/* </Slide> */}
        {props.children}
      </Container>
    </>
  );
}
