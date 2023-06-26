import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import CustomLink from "../components/common/CustomLink";
import { getVideos } from "../utils/api";
import SearchBox from "../components/search-box";
import { sectionSpacing } from "../utils/commonStyle";
import MainAppBar from "../components/app-bar/MainAppBar";
import BackgroundGrey from "../components/common/BackgroundGrey";
import BottomNavigationBar from "../components/app-bar/BottomNavigationBar";
import VideoMediaCard from "../components/common/meida-cards/VideoMediaCard";

export default function VideosList() {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const videos = await getVideos();
      setVideosData(videos);
    }
    fetchData();
  }, []);

  return (
    <>
      <MainAppBar sectionSpacing={sectionSpacing} />
      <Box sx={{ p: "0.5rem 1.5rem" }}>
        <SearchBox sectionSpacing={sectionSpacing} />
      </Box>
      <BackgroundGrey styles={sectionSpacing}>
        <Box sx={{ ...sectionSpacing }}>
          <Grid container spacing={2}>
            {videosData.map((video) => (
              <Grid item xs={12} sm={6} key={video?.id}>
                <CustomLink to={`/videos/${video?.id}`}>
                  <VideoMediaCard data={video} />
                </CustomLink>
              </Grid>
            ))}
          </Grid>
        </Box>
      </BackgroundGrey>
      <BottomNavigationBar />
    </>
  );
}
