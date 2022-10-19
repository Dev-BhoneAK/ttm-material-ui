import * as React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Home from "./screens/Home";
import ColorModeContext from "./context/ColorModeContext";

export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    // <StyledEngineProvider injectFirst>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Container maxWidth="md">
            <Routes>
              <Route path="/" exact index element={<Home />} />
            </Routes>
          </Container>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
    // </StyledEngineProvider>
    // <Routes>
    //   <Route path="/" exact index element={<Home />} />
    // </Routes>
  );
}
