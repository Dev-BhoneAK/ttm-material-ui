import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { grey } from "@mui/material/colors";
import CustomTypo from "../common/CustomTypo";
import CustomIcon from "../common/CustomIcon";

export default function SectionTitle(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
        marginBottom: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: grey[800],
        }}
      >
        <CustomIcon
          icon={props.icon}
          // styles={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        />
        {/* {props.icon} */}
        <CustomTypo title={props.title} variant="h6" styles={{ ml: "5px" }} />
        {/* <Typography variant="h6" sx={{ ml: "5px" }}>
          {props.title}
        </Typography> */}
      </Box>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <CustomTypo title="Show All" variant="p" />
      </Link>
    </Box>
  );
}
