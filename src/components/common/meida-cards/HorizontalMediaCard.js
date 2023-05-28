import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CustomLink from "../CustomLink";

export default function HorizontalMediaCard({ data, margin, width }) {
  return (
    <CustomLink to={`/news/${data?.id}`}>
      <Card
        sx={{
          mr: margin === "true" && 1.5,
          width: width,
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 100, mr: "8px" }}
          image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
          alt={data?.title}
        />
        <CardContent sx={{ "&:last-child": { p: 0 } }}>
          <Typography
            sx={{
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              variant: "body1",
            }}
          >
            {data?.title}
          </Typography>
        </CardContent>
      </Card>
    </CustomLink>
  );
}
