import * as React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Home from "./screens/Home";
import NewsList from "./screens/NewsList";
import NewsArticlesDetail from "./screens/NewsArticlesDetail";
import QuestionAnswer from "./screens/QuestionAnswer";
import Weather from "./screens/Weather";
import ColorModeContext from "./context/ColorModeContext";
import { responsiveFontSizes } from "@mui/material/styles";

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

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  theme.typography.body1 = {
    fontSize: "0.87rem",
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  };

  const themeWithResponsiveFont = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeWithResponsiveFont}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Container maxWidth="md" sx={{ px: { xs: 0 } }}>
            <Routes>
              <Route path="/" exact index element={<Home />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="/news/:news_id" element={<NewsArticlesDetail />} />
              <Route path="/question-answer" element={<QuestionAnswer />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
          </Container>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
