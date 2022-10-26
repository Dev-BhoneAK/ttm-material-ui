import React from "react";
import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MainAppBar from "../components/app-bar/MainAppBar";
import SearchBox from "../components/SearchBox";
import PopularCategories from "../components/home/PopularCategories";
import PopularNews from "../components/home/PopularNews";
import NewsCategories from "../components/home/NewsCategories";
import LatestNewsByCategories from "../components/home/LatestNewsByCategories";
import Articles from "../components/home/Articles";
import Novels from "../components/home/Novels";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <MainAppBar />
      <Container sx={{ p: "12px 16px" }}>
        <SearchBox />
        <PopularCategories />
      </Container>
      <Container
        sx={{
          background: theme.palette.mode === "dark" ? "inherit" : "#e1e1e1",
          p: "1px 16px 20px 16px",
        }}
      >
        <PopularNews />
        <NewsCategories />
        <LatestNewsByCategories />
      </Container>
      <Container sx={{ p: "8px 16px" }}>
        <Articles />
      </Container>
      <Container
        sx={{
          background: theme.palette.mode === "dark" ? "inherit" : "#e1e1e1",
          p: "1px 16px 20px 16px",
          mb: 7,
        }}
      >
        <Novels />
      </Container>
      <BottomNavigationBar />
    </>
  );
}
