import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useGreyBackground from "../../hooks/useGreyBackground";

export default function BackgroundGrey(props) {
  const theme = useTheme();
  const greyBackground = useGreyBackground();
  return (
    <Box
      sx={{
        background: greyBackground,
        p: "0.5rem 1.5rem",
        ...props.styles,
      }}
    >
      {props.children}
    </Box>
  );
}
