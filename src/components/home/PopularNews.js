import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarsIcon from "@mui/icons-material/Stars";
import SectionTitle from "../common/SectionTitle";
import CategoryPaper from "../common/CategoryPaper";
import Stack from "@mui/material/Stack";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MediaCard from "../common/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function PopularNews() {
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
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </Slider>
    </>
  );
}
