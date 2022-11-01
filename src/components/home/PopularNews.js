import React from "react";
import SectionTitle from "../common/SectionTitle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MediaCard from "../common/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function PopularNews({ popularNews }) {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <>
      <SectionTitle icon={<TrendingUpIcon />} title="Popular News" />
      <Slider {...settings}>
        {popularNews.map((popularNew) => (
          <MediaCard
            type="horizontal"
            margin="true"
            key={popularNew.id}
            data={popularNew}
          />
        ))}
        {/* <MediaCard type="horizontal" margin="true" />
        <MediaCard type="horizontal" margin="true" /> */}
      </Slider>
    </>
  );
}
