import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  useTheme,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { getHomeData } from "../utils/api";
import MainAppBar from "../components/app-bar/MainAppBar";
import SearchBox from "../components/SearchBox";
import PopularCategories from "../components/home/PopularCategories";
import BackgroundGrey from "../components/common/BackgroundGrey";
import PopularNews from "../components/home/PopularNews";
import NewsCategories from "../components/home/NewsCategories";
import LatestNewsByCategories from "../components/home/LatestNewsByCategories";
import Articles from "../components/home/Articles";
import Novels from "../components/home/Novels";
import MobileTV from "../components/home/MobileTV";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";

export default function Home() {
  const theme = useTheme();

  const sectionSpacing = {
    mb: { xs: 2, sm: 3 },
  };

  const [homeData, setHomeData] = useState({
    popularNews: [],
    newsCategories: [],
    novels: [],
    videos: [],
  });

  useEffect(() => {
    async function fetchData() {
      const { popularNews, newsCategories, novels, videos } =
        await getHomeData();
      setHomeData({
        popularNews,
        newsCategories,
        novels,
        videos,
      });
    }
    fetchData();
  }, []);
  return (
    <>
      <MainAppBar sectionSpacing={sectionSpacing} />
      <Box sx={{ p: "0.5rem 1.5rem" }}>
        <SearchBox sectionSpacing={sectionSpacing} />
        <PopularCategories sectionSpacing={sectionSpacing} />
      </Box>
      {/* <Box
        sx={{
          background: theme.palette.mode === "dark" ? "inherit" : "#e1e1e1",
          p: "0.5rem 1.5rem",
          ...sectionSpacing,
        }}
      > */}
      {/* <BackgroundGrey styles={sectionSpacing}> */}
      <PopularNews
        popularNews={homeData.popularNews}
        sectionSpacing={sectionSpacing}
      />

      <LatestNewsByCategories
        newsCategories={homeData.newsCategories}
        sectionSpacing={sectionSpacing}
      />
      <Novels novels={homeData.novels} />
      {/* </BackgroundGrey> */}
      {/* <BackgroundGrey></BackgroundGrey> */}

      {/* </Box> */}
      {/* <Container sx={{ p: "0 16px 20px 16px", mb: 7 }}> */}
      <MobileTV videos={homeData.videos} sectionSpacing={sectionSpacing} />
      {/* </Container> */}
      <BottomNavigationBar />
    </>
  );
}
