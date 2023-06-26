import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { textOverflowEllipsis } from "../../../utils/commonStyle";


export default function HorizontalMediaCard({ data, margin, width }) {
  return (
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
          <Typography sx={{ ...textOverflowEllipsis }}>
            {data?.title}
          </Typography>
        </CardContent>
      </Card>
  );
}
