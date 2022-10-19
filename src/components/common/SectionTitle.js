import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

export default function SectionTitle(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {props.icon}
        <Typography variant="h6">{props.title}</Typography>
      </Box>
      <Typography>Show All</Typography>
    </Box>
  );
}
