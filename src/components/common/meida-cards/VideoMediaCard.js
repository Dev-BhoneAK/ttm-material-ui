import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Typography from "@mui/material/Typography";

import useUpperTabletSize from "../../../hooks/useUpperTabletSize";
import CustomLink from "../CustomLink";

export default function VideoMediaCard({ data }) {
  const upperTabletSize = useUpperTabletSize();
  return (
    <CustomLink to={`/videos/${data?.id}`}>
      <Card
        sx={{
          mr: 1.5,
          mb: 1.5,
          width: upperTabletSize ? "260px" : "200px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height={upperTabletSize ? "146px" : "112px"}
            image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.screenImage}`}
            alt={data?.title}
          />
          <PlayCircleOutlineIcon
            sx={{
              position: "absolute",
              color: "white",
              fontSize: upperTabletSize ? "50px" : "40px",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
        <CardContent sx={{ "&:last-child": { py: 2 } }}>
          <Typography variant="body1">{data?.title}</Typography>
        </CardContent>
      </Card>
    </CustomLink>
  );
}
