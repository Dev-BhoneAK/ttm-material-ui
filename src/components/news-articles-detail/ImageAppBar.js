import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import Image from "mui-image";

import DetailAppBar from "../app-bar/DetailAppBar";

export default function ImageAppBar(props) {
  return (
    <Container maxWidth="md" sx={{ position: "relative", px: { xs: 0 } }}>
      <DetailAppBar />
      <Image
        src={`http://localhost:8000/assets${props?.image}`}
        width="100%"
        showLoading
        duration={3000}
        easing="ease-in-out"
        bgColor="inherit"
      />
      {/* <Container> */}
      <Box>
        {[...new Array(30)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Box>
      {/* </Container> */}
    </Container>
  );
}
