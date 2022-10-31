import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { grey } from "@mui/material/colors";

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
        {props.icon}
        <Typography variant="h6" sx={{ ml: "5px" }}>
          {props.title}
        </Typography>
      </Box>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        Show All
      </Link>
      {/* <Typography>Show All</Typography> */}
    </Box>
  );
}
