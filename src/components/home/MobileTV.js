import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaCard from "../common/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function MobileTV({ videos }) {
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
        {videos.map((video) => (
          <MediaCard
            type="video"
            margin="true"
            key={video.id}
            data={video}
          />
        ))}
      </Slider>
    </>
  );
}
