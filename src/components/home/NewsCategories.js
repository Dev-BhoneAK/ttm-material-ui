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
          icon={newsCategory.icon}
          title={newsCategory.name}
          name="news"
          index={index}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      ))}
      {/* <CategoryPaper
        icon="question_answer"
        title="Kitchen"
        name="news"
        index="1"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <CategoryPaper
        icon="live_tv"
        title="Live TV"
        name="news"
        index="2"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <CategoryPaper
        icon="live_tv"
        title="ABC"
        name="news"
        index="3"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <CategoryPaper
        icon="live_tv"
        title="XYZ"
        name="news"
        index="4"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <CategoryPaper
        icon="question_answer"
        title="Lucky Draw"
        name="news"
        index="5"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <CategoryPaper
        icon="question_answer"
        title="NEWS"
        name="news"
        index="6"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <CategoryPaper
        icon="live_tv"
        title="LOCAL"
        name="news"
        index="7"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <CategoryPaper
        icon="live_tv"
        title="International"
        name="news"
        index="8"
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      /> */}
    </Slider>
  );
}
