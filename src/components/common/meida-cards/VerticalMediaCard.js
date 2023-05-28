import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import useUpperTabletSize from "../../../hooks/useUpperTabletSize";
import CustomLink from "../CustomLink";

export default function VerticalMediaCard({ data }) {
  const upperTabletSize = useUpperTabletSize();
  return (
    <CustomLink to={`/news/${data?.id}`}>
      <Card>
        <CardMedia
          component="img"
          height={upperTabletSize ? "240px" : "200px"}
          image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
          alt={data?.title}
        />
        <CardContent sx={{ "&:last-child": { py: 2 } }}>
          <Typography variant="body1">{data?.title}</Typography>
        </CardContent>
      </Card>
    </CustomLink>
  );
}
