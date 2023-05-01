import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Icon from "@mui/material/Icon";

import { grey } from "@mui/material/colors";

// const setColor = (props, theme) => {
//   let color = "";
//   if (props.index && props.index === props.activeSlide) {
//     color = "blue";
//   } else {
//     color = theme.palette.mode === "dark" ? "#fff" : grey[800];
//   }
//   return color;
// };

export default function CustomIcon(props) {
  const theme = useTheme();
  return (
    <Icon
      sx={{
        fontSize: { xs: "1.5rem", md: "2rem" },
        // color: setColor(props, theme),
        ...props.styles,
      }}
    >
      {props.icon}
    </Icon>
  );
}
