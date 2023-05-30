import React from "react";
import { Box } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import useUpperTabletSize from "../../hooks/useUpperTabletSize";
import SectionTitle from "../common/SectionTitle";
import HorizontalMediaCard from "../common/meida-cards/HorizontalMediaCard";

export default function PopularNews({ popularNews, sectionSpacing }) {
  const upperTabletSize = useUpperTabletSize();
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="trending_up" title="Popular News" />
      <Slider {...settings}>
        {popularNews.map((popularNew) => (
          <HorizontalMediaCard
            margin="true"
            key={popularNew.id}
            data={popularNew}
            width={upperTabletSize ? "380px" : "280px"}
          />
        ))}
      </Slider>
    </Box>
  );
}
