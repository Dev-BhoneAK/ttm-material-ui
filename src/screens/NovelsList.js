import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { getNovels } from "../utils/api";
import Novel from "../components/common/Novel";
import HeaderSection from "../components/common/HeaderSection";
import BackgroundGrey from "../components/common/BackgroundGrey";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";
import { sectionSpacing, spaceFromNavigationBar } from "../utils/commonStyle";

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
      <HeaderSection />
      <BackgroundGrey styles={{ ...sectionSpacing, ...spaceFromNavigationBar }}>
          <Grid container spacing={3}>
            {novelsData.map((novel) => (
              <Novel key={novel.id} novelData={novel} />
            ))}
          </Grid>
      </BackgroundGrey>
      <BottomNavigationBar />
    </>
  );
}
