import React from "react";
import { Container } from "@mui/material";
import Image from "mui-image";

import DetailAppBar from "./DetailAppBar";

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
    </>
  );
}
