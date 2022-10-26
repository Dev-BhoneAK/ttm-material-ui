import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const horizontalMediaCard = () => {
  return (
    <Card sx={{ display: "flex", width: "500px", mr: 1.5 }}>
      <CardMedia
        component="img"
        sx={{ width: 80 }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", p: "16px 4px 8px 8px" }}>
          <Typography>Live From Space Lorem Ipsum</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

const verticalMediaCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function MediaCard(props) {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return props.type === "horizontal" ? (
    <Card sx={{ display: "flex", mr: props.margin === "true" && 1.5 }}>
      <CardMedia
        component="img"
        sx={{ width: 80 }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", p: "16px 4px 8px 8px" }}>
          <Typography>Live From Space Lorem Ipsum</Typography>
        </CardContent>
      </Box>
    </Card>
  ) : (
    <Card>
      <CardMedia
        component="img"
        height={upperTabletSize ? "200px" : "260px"}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
  // props.type === "horizontal" ? horizontalMediaCard : verticalMediaCard;
}
