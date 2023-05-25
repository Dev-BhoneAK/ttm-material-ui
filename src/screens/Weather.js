import React from "react";
import { Box } from "@mui/material";
import Grow from "@mui/material/Grow";

import DetailAppBar from "../components/app-bar/DetailAppBar";
import HeadingTitle from "../components/common/HeadingTitle";
import { WeatherCard } from "../components/common/MediaCard";

export default function Weather() {
  const styles = {
    mb: { xs: 2, sm: 3 },
    position: "static",
    boxShadow: "none",
  };
  return (
    <>
      <DetailAppBar
        headingTitle={<HeadingTitle title="Weather" />}
        styles={styles}
      />
      <Box sx={{ px: 3, pb: 3 }}>
        <Grow in timeout={1000}>
          <WeatherCard date="20-02-2022" icon="RAIN" />
        </Grow>

        <Grow in timeout={1000} style={{ transitionDelay: "500ms" }}>
          <WeatherCard date="21-02-2022" icon="CLOUDY" />
        </Grow>
        <Grow in timeout={1000} style={{ transitionDelay: "1000ms" }}>
          <WeatherCard date="22-02-2022" icon="PARTLY_CLOUDY_DAY" />
        </Grow>
        <Grow in timeout={1000} style={{ transitionDelay: "1500ms" }}>
          <WeatherCard date="23-02-2022" icon="SLEET" />
        </Grow>
        <Grow in timeout={1000} style={{ transitionDelay: "2000ms" }}>
          <WeatherCard date="24-02-2022" icon="CLEAR_DAY" />
        </Grow>
      </Box>
    </>
  );
}
