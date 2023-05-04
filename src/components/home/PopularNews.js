import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MediaCard from "../common/MediaCard";
import { Box } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SectionTitle from "../common/SectionTitle";

export default function PopularNews({ popularNews, sectionSpacing }) {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="trending_up" title="Popular News" />
      <Slider {...settings}>
        {popularNews.map((popularNew) => (
          <MediaCard
            type="horizontal"
            margin="true"
            key={popularNew.id}
            data={popularNew}
            width={upperTabletSize ? "380px" : "280px"}
          />
        ))}
      </Slider>
    </Box>
  );
}
