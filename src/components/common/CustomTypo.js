import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { grey, purple } from "@mui/material/colors";

export default function CustomTypo(props) {
  const theme = useTheme();
  return (
    <Typography
      variant={props.variant}
      sx={{
        color: theme.palette.mode === "dark" ? "#c4c4c4" : grey[800],
        ...props.styles,
      }}
    >
      {props.title}
    </Typography>
  );
}
