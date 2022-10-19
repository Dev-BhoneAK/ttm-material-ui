import * as React from "react";
import Paper from "@mui/material/Paper";

export default function CategoryPaper(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.icon}
    </Paper>
  );
}
