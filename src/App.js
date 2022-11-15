import * as React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Home from "./screens/Home";
import NewsArticlesDetail from "./screens/NewsArticlesDetail";
import ColorModeContext from "./context/ColorModeContext";
import { responsiveFontSizes } from "@mui/material/styles";

export default function App() {
  const [mode, setMode] = React.useState("light");
  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);
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
        <ThemeProvider theme={fontTheme}>
          <CssBaseline />
          <Suspense fallback={<div>Loading...</div>}>
            <Container maxWidth="md" sx={{ px: { xs: 0 } }}>
              <Routes>
                <Route path="/" exact index element={<Home />} />
                <Route path="/news/:news_id" element={<NewsArticlesDetail />} />
              </Routes>
            </Container>
          </Suspense>
        </ThemeProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
