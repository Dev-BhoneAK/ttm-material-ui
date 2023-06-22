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
import useUpperTabletSize from "../hooks/useUpperTabletSize";

export default function NewsList() {
  const [newsCategoriesData, setNewsCategoriesData] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const upperTabletSize = useUpperTabletSize();

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
            {upperTabletSize
              ? NewsListUpperTabletView({ latestNews })
              : NewsListMobileView({ latestNews })}
          </Grid>
        </Box>
      </BackgroundGrey>
      <BottomNavigationBar />
    </>
  );
}

const NewsListMobileView = ({ latestNews }) => {
  const [firstNew, ...restNews] = latestNews;
  return (
    <>
      <Grid item xs={12}>
        <VerticalMediaCard data={firstNew} />
      </Grid>
      {restNews.map((data) => (
        <Grid item xs={12} key={data?.id}>
          <HorizontalMediaCard margin="false" data={data} />
        </Grid>
      ))}
    </>
  );
};

const NewsListUpperTabletView = ({ latestNews }) => (
  <>
    {latestNews.map((data, index) => (
      <Grid item sm={6} key={data?.id}>
        <VerticalMediaCard data={data} />
      </Grid>
    ))}
  </>
);
