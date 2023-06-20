import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { sectionSpacing } from "../utils/commonStyle";
import { getCategories } from "../utils/api";
import MainAppBar from "../components/app-bar/MainAppBar";
import SearchBox from "../components/search-box";
import PopularCategories from "../components/home/PopularCategories";
import BackgroundGrey from "../components/common/BackgroundGrey";
import LatestNewsByCategories from "../components/home/LatestNewsByCategories";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";

export default function NewsList() {
  const [newsCategoriesData, setNewsCategoriesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newsCategories = await getCategories("news");
      setNewsCategoriesData(newsCategories);
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
      <BackgroundGrey styles={sectionSpacing}>
        <LatestNewsByCategories
          newsCategories={newsCategoriesData}
          sectionSpacing={sectionSpacing}
        />
      </BackgroundGrey>
      <BottomNavigationBar />
    </>
  );
}
