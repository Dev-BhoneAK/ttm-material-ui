import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { grey, purple } from "@mui/material/colors";

const setColor = (props, theme) => {
    let color = "";
    if (props.index && props.index === props.activeSlide) {
        color = "blue";
    } else {
        color = theme.palette.mode === "dark" ? "#fff" : grey[800];
    }
    return color;
};

export default function CustomTypo(props) {
  const theme = useTheme();
  return (
    <Typography
      variant={props.variant}
      sx={{
        color: setColor(props, theme),
        ...props.styles,
      }}
    >
      {props.title}
    </Typography>
  );
}
