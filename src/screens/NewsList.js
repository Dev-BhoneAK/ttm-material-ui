import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import { sectionSpacing } from "../utils/commonStyle";
import { getCategories } from "../utils/api";
import MainAppBar from "../components/app-bar/MainAppBar";
import SearchBox from "../components/search-box";
import BackgroundGrey from "../components/common/BackgroundGrey";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";
import NewsCategoriesList from "../components/common/NewsCategoriesList";
import HorizontalMediaCard from "../components/common/meida-cards/HorizontalMediaCard";
import VerticalMediaCard from "../components/common/meida-cards/VerticalMediaCard";
import { getLatestNewsByCategories } from "../utils/api";

export default function NewsList() {
  const [newsCategoriesData, setNewsCategoriesData] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newsCategories = await getCategories("news");
      setNewsCategoriesData(newsCategories);
    }
    fetchData();
  }, []);

  useEffect(() => {
    getLatestNewsByCategories(1).then((data) => {
      setLatestNews(data);
    });
  }, []);
  return (
    <>
      <MainAppBar sectionSpacing={sectionSpacing} />
      <Box sx={{ p: "0.5rem 1.5rem" }}>
        <SearchBox sectionSpacing={sectionSpacing} />
      </Box>
      <BackgroundGrey styles={sectionSpacing}>
        <Box sx={{ ...sectionSpacing }}>
          <NewsCategoriesList
            newsCategories={newsCategoriesData}
            setLatestNews={setLatestNews}
          />
          <Grid container spacing={2}>
            {latestNews.map((data, index) =>
              index < 2 ? (
                <Grid
                  item
                  xs={12}
                  //   sm={6}
                  key={data?.id}
                  sx={{
                    display:
                      index === 1 ? { xs: "none", sm: "block" } : undefined,
                  }}
                >
                  <VerticalMediaCard data={data} />
                </Grid>
              ) : (
                <Grid item xs={12} sm={6} key={data?.id}>
                  <HorizontalMediaCard margin="false" data={data} />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </BackgroundGrey>
      <BottomNavigationBar />
    </>
  );
}
