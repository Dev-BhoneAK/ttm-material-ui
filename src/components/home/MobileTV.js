import React from "react";
import SectionTitle from "../common/SectionTitle";
import ArticleIcon from "@mui/icons-material/Article";
import MediaCard from "../common/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function MobileTV() {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <>
      <SectionTitle icon={<LiveTvIcon />} title="Mobile TV" />
      <Slider {...settings}>
        <MediaCard type="vertical2" margin="true" />
        <MediaCard type="vertical2" margin="true" />
        <MediaCard type="vertical2" margin="true" />
      </Slider>
    </>
  );
}
