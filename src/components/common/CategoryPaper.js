import * as React from "react";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";

export default function CategoryPaper(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: { xs: 50, md: 80 },
        height: { xs: 50, md: 80 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon sx={{ fontSize: { xs: 20, md: 30 } }}>{props.icon}</Icon>
    </Paper>
  );
}
