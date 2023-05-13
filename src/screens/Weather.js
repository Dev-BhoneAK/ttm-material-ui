import React from "react";
import { Box } from "@mui/material";
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
        <WeatherCard date="20-02-2022" icon="RAIN" />
        <WeatherCard date="21-02-2022" icon="CLOUDY" />
        <WeatherCard date="22-02-2022" icon="PARTLY_CLOUDY_DAY" />
        <WeatherCard date="23-02-2022" icon="SLEET" />
        <WeatherCard date="24-02-2022" icon="CLEAR_DAY" />
      </Box>
    </>
  );
}
