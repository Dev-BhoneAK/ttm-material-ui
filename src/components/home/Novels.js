import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";

import SectionTitle from "../common/SectionTitle";
import ImageMediaCard from "../common/meida-cards/ImageMediaCard";

export default function Novels({ novels, sectionSpacing }) {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="menu_book" title="Novels" />
      <Slider {...settings}>
        {novels.map((novel) => (
          <ImageMediaCard margin="true" key={novel.id} data={novel} />
        ))}
      </Slider>
    </Box>
  );
}
