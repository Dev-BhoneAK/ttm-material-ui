import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaCard from "../common/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";

export default function Novels({ novels, sectionSpacing }) {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="menu_book" title="Novels" />
      <Slider {...settings}>
        {novels.map((novel) => (
          <MediaCard type="image" margin="true" key={novel.id} data={novel} />
        ))}
      </Slider>
    </Box>
  );
}
