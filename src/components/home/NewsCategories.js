import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarsIcon from "@mui/icons-material/Stars";
import SectionTitle from "../common/SectionTitle";
import CategoryPaper from "../common/CategoryPaper";
import Stack from "@mui/material/Stack";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function NewsCategories({ newsCategories }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "slider variable-width",
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    variableWidth: true,
  };
  return (
    <Slider {...settings} style={{ margin: "20px 0" }}>
      {newsCategories.map((newsCategory, index) => (
        <CategoryPaper
          key={newsCategory.id}
          icon={newsCategory.icon}
          title={newsCategory.name}
          name="news"
          index={index}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      ))}
    </Slider>
  );
}
