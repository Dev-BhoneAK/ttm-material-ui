import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { sectionSpacing } from "../utils/commonStyle";
import { getNovels } from "../utils/api";
import MainAppBar from "../components/app-bar/MainAppBar";
import SearchBox from "../components/search-box";
import BackgroundGrey from "../components/common/BackgroundGrey";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";
import Novel from "../components/common/Novel";

export default function NovelsList() {
  const [novelsData, setNovelsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const novels = await getNovels();
      setNovelsData(novels);
    }
    fetchData();
  }, []);

  return (
    <>
      <MainAppBar sectionSpacing={sectionSpacing} />
      <Box sx={{ p: "1rem" }}>
        <SearchBox sectionSpacing={sectionSpacing} />
      </Box>
      <BackgroundGrey styles={sectionSpacing}>
        <Box sx={{ ...sectionSpacing }}>
          <Grid container spacing={2}>
            {novelsData.map((novel) => (
              <Novel key={novel.id} novelData={novel} />
            ))}
          </Grid>
        </Box>
      </BackgroundGrey>
      <BottomNavigationBar />
    </>
  );
}
