import React from "react";
import { Box } from "@mui/material";
import Grow from "@mui/material/Grow";
import Zoom from "@mui/material/Zoom";

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
        headingTitle={<HeadingTitle title="Weekly Weather Forecast" />}
        styles={styles}
      />
      <Box sx={{ px: 3, pb: 3 }}>
        {/* <Zoom in timeout={1000}>
          <WeatherCard date="20-02-2022" icon="RAIN" />
        </Zoom>

        <Zoom in timeout={1000} style={{ transitionDelay: "500ms" }}>
          <WeatherCard date="21-02-2022" icon="CLOUDY" />
        </Zoom> */}

        <Zoom in timeout={2000}>
          <WeatherCard date="22-02-2022" icon="PARTLY_CLOUDY_DAY" day="TODAY" />
        </Zoom>
        <Zoom in timeout={2000} style={{ transitionDelay: "500ms" }}>
          <WeatherCard date="21-02-2022" icon="CLOUDY" day="MON" />
        </Zoom>
        <Zoom in timeout={2000} style={{ transitionDelay: "1000ms" }}>
          <WeatherCard date="21-02-2022" icon="CLOUDY" day="TUE" />
        </Zoom>
        <Zoom in timeout={2000} style={{ transitionDelay: "1500ms" }}>
          <WeatherCard date="23-02-2022" icon="SLEET" day="WED" />
        </Zoom>
        <Zoom in timeout={2000} style={{ transitionDelay: "2000ms" }}>
          <WeatherCard date="24-02-2022" icon="CLEAR_DAY" day="THURS" />
        </Zoom>
        <Zoom in timeout={2000} style={{ transitionDelay: "2500ms" }}>
          <WeatherCard date="24-02-2022" icon="CLEAR_DAY" day="FRI" />
        </Zoom>
        <Zoom in timeout={2000} style={{ transitionDelay: "3000ms" }}>
          <WeatherCard date="24-02-2022" icon="CLEAR_DAY" day="SAT" />
        </Zoom>

        {/* <Grow in timeout={1000}>
          <WeatherCard date="22-02-2022" icon="PARTLY_CLOUDY_DAY" day="TODAY" />
        </Grow>
        <Grow in timeout={1000} style={{ transitionDelay: "500ms" }}>
          <WeatherCard date="21-02-2022" icon="CLOUDY" day="MON" />
        </Grow>
        <Grow in timeout={2000} style={{ transitionDelay: "1000ms" }}>
          <WeatherCard date="21-02-2022" icon="CLOUDY" day="TUE" />
        </Grow>
        <Grow in timeout={3000} style={{ transitionDelay: "1500ms" }}>
          <WeatherCard date="23-02-2022" icon="SLEET" day="WED" />
        </Grow>
        <Grow in timeout={4000} style={{ transitionDelay: "2000ms" }}>
          <WeatherCard date="24-02-2022" icon="CLEAR_DAY" day="THURS" />
        </Grow>
        <Grow in timeout={5000} style={{ transitionDelay: "2500ms" }}>
          <WeatherCard date="24-02-2022" icon="CLEAR_DAY" day="FRI" />
        </Grow>
        <Grow in timeout={6000} style={{ transitionDelay: "3000ms" }}>
          <WeatherCard date="24-02-2022" icon="CLEAR_DAY" day="SAT" />
        </Grow> */}
      </Box>
    </>
  );
}
