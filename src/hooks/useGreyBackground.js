import { useTheme } from "@mui/material/styles";

export default function useGreyBackground() {
  const theme = useTheme();
  //   const greyBackground = theme.palette.mode === "dark" ? "inherit" : "#e1e1e1";
  const greyBackground = theme.palette.mode === "dark" ? "#1e1e1e" : "#e1e1e1";
  //   const greyBackground = "#e1e1e1";
  return greyBackground;
}
