import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function BackgroundGrey(props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.mode === "dark" ? "inherit" : "#e1e1e1",
        p: "0.5rem 1.5rem",
        ...props.styles,
      }}
    >
      {props.children}
    </Box>
  );
}
