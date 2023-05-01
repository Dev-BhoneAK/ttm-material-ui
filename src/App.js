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
import Typography from '@mui/material/Typography';

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
    () => {
        return createTheme({
            palette: {
                mode,
            },
        })
    },
    [mode]
  );

  const themeWithResponsiveFont = responsiveFontSizes(theme);

    return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={themeWithResponsiveFont}>
          <CssBaseline />
          <Suspense fallback={<div>Loading...</div>}>
            <Container maxWidth="md" sx={{ px: { xs: 0 } }}>
            <Typography variant="subtitle1">Responsive h3</Typography>
              <Routes>
                <Route path="/" exact index element={<Home />} />
                <Route path="/news/:news_id" element={<NewsArticlesDetail />} />
              </Routes>
            </Container>
          </Suspense>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
