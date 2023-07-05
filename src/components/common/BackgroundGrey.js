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
        p: { xs: 2, sm: 3 },
        ...props.styles,
      }}
    >
      {props.children}
    </Box>
  );
}
