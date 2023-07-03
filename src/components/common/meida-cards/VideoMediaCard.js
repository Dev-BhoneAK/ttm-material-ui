import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Typography from "@mui/material/Typography";

import useUpperTabletSize from "../../../hooks/useUpperTabletSize";

export default function VideoMediaCard({ data, styles }) {
  const upperTabletSize = useUpperTabletSize();
  return (
    <Card
      sx={{
        ...styles,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height={upperTabletSize ? "200" : "150"}
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
  );
}
