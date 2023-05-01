import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useUpperTabletSize() {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return upperTabletSize;
}