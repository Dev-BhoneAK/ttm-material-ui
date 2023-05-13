import React from "react";
import { Container } from "@mui/material";
import Image from "mui-image";

import DetailAppBar from "../app-bar/DetailAppBar";

export default function ImageAppBar(props) {
  return (
    <>
      <Container sx={{ position: "relative", px: { xs: 0 } }}>
        <DetailAppBar
          styles={{
            backgroundColor: "rgba(0,0,0,0.3)",
            position: "fixed",
            left: "0",
            top: "0",
            maxWidth: "md",
            px: { xs: 0 },
            margin: "0 auto",
          }}
        />
        <Image
          src={`${process.env.REACT_APP_API_DOMAIN}/assets${props?.image}`}
          width="100%"
          showLoading
          duration={3000}
          easing="ease-in-out"
          bgColor="inherit"
        />
      </Container>

      {/* <Container> */}
      {/* <Box>
        {[...new Array(30)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Box> */}
    </>
  );
}
