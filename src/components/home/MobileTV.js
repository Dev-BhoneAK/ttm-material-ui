import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";

import SectionTitle from "../common/SectionTitle";
import VideoMediaCard from "../common/meida-cards/VideoMediaCard";

export default function MobileTV({ videos, sectionSpacing }) {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="live_tv" title="Mobile TV" showAll />
      <Slider {...settings}>
        {videos.map((video) => (
          <VideoMediaCard margin="true" key={video.id} data={video} />
        ))}
      </Slider>
    </Box>
  );
}
