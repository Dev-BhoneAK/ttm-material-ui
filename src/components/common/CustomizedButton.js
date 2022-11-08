import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { grey, purple } from "@mui/material/colors";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#222" : "#fff",
  color: theme.palette.mode === "dark" ? "#fff" : grey[800],
  "&:hover": {
    backgroundColor: grey[500],
    borderColor: "#0062cc",
  },
  "&:active": {
    backgroundColor: grey[700],
    borderColor: grey[800],
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem grey[900]",
  },
}));

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: purple[500],
//   "&:hover": {
//     backgroundColor: purple[700],
//   },
// }));

export default function CustomizedButton() {
  //   const theme = useTheme();
  return (
    <CustomButton
      variant="contained"
      fullWidth
      endIcon={<NavigateNextIcon />}
      disableRipple
      //   theme={theme}
    >
      View More
    </CustomButton>
  );
}
