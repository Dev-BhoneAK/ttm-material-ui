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
        marginBottom: { xs: 1, sm: 1.5 },
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
        <CustomIcon icon={props.icon} />
        <CustomTypo title={props.title} variant="h6" styles={{ ml: "5px" }} />
      </Box>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "inherit", display: "none" }}
      >
        <CustomTypo title="Show All" variant="body2" />
      </Link>
    </Box>
  );
}
