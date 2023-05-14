import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function HeadingTitle({ title }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: "block",
          overflow: "visible",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
