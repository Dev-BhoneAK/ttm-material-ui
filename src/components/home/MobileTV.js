import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaCard from "../common/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "@mui/material";

export default function MobileTV({ videos }) {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <Container>
      <SectionTitle icon="live_tv" title="Mobile TV" />
      <Slider {...settings}>
        {videos.map((video) => (
          <MediaCard type="video" margin="true" key={video.id} data={video} />
        ))}
      </Slider>
    </Container>
  );
}
