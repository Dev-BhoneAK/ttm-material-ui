import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { getHomeData } from "../utils/api";
import MainAppBar from "../components/app-bar/MainAppBar";
import SearchBox from "../components/SearchBox";
import PopularCategories from "../components/home/PopularCategories";
import PopularNews from "../components/home/PopularNews";
import NewsCategories from "../components/home/NewsCategories";
import LatestNewsByCategories from "../components/home/LatestNewsByCategories";
import Articles from "../components/home/Articles";
import Novels from "../components/home/Novels";
import MobileTV from "../components/home/MobileTV";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";

export default function Home() {
  const theme = useTheme();
  const [homeData, setHomeData] = useState({
    popularNews: [],
    newsCategories: [],
    latestNewsByCategories: [],
    novels: [],
    videos: [],
  });

  useEffect(() => {
    async function fetchData() {
      const {
        popularNews,
        newsCategories,
        latestNewsByCategories,
        novels,
        videos,
      } = await getHomeData();
      setHomeData({
        popularNews,
        newsCategories,
        latestNewsByCategories,
        novels,
        videos,
      });
    }
    fetchData();
  }, []);
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
        <PopularNews popularNews={homeData.popularNews} />
        <NewsCategories newsCategories={homeData.newsCategories} />
        <LatestNewsByCategories latestNews={homeData.latestNewsByCategories} />
        <Novels novels={homeData.novels} />
      </Container>
      {/* <Container sx={{ p: "4px 16px 20px 16px" }}>
        <Articles />
      </Container> */}
      {/* <Container
        sx={{
          background: theme.palette.mode === "dark" ? "inherit" : "#e1e1e1",
          p: "1px 16px 20px 16px",
        }}
      >
      </Container> */}
      <Container sx={{ p: "0 16px 20px 16px", mb: 7 }}>
        <MobileTV videos={homeData.videos} />
      </Container>
      <BottomNavigationBar />
    </>
  );
}
