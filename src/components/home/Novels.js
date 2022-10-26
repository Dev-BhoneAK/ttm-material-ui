import React from "react";
import SectionTitle from "../common/SectionTitle";
import ArticleIcon from "@mui/icons-material/Article";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Novels() {
  const settings = {
    // className: "slider variable-width",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };
  return (
    <>
      <SectionTitle icon={<MenuBookIcon />} title="Novels" />
      <Slider {...settings}>
        <Card sx={{ mr: 5 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Card>
        <Card sx={{ mr: 5 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Card>
        <Card sx={{ mr: 5 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Card>
        <Card sx={{ mr: 5 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Card>
      </Slider>
    </>
  );
}
