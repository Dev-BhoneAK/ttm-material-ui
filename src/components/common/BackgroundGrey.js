import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useDarkLightTheme from "../../hooks/useDarkLightTheme";

export default function BackgroundGrey(props) {
  const { greyBackground } = useDarkLightTheme();
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
