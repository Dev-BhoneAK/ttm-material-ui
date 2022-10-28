import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const HorizontalMediaCard = ({ margin }) => {
  return (
    <Card sx={{ display: "flex", mr: margin === "true" && 1.5 }}>
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

const VerticalMediaCard = ({ upperTabletSize }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height={upperTabletSize ? "260px" : "200px"}
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
};

const VerticalMediaCard2 = ({ upperTabletSize }) => {
  return (
    <Card
      sx={{
        mr: 1.5,
        width: upperTabletSize ? "260px" : "200px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height={upperTabletSize ? "146px" : "112px"}
          image="https://mui.com/static/images/cards/live-from-space.jpg"
          alt="green iguana"
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles
        </Typography>
      </CardContent>
    </Card>
  );
};

const ImageMediaCard = ({ upperTabletSize = { upperTabletSize } }) => {
  return (
    <Stack alignItems="center" sx={{ mr: 6 }}>
      <CardMedia
        component="img"
        sx={{
          width: upperTabletSize ? "140px" : "120px",
          boxShadow: "0 3px 10px -2px black",
          borderRadius: "12px",
        }}
        image={require(`../../assets/images/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpeg`)}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <CardContent sx={{ flex: "1 0 auto", p: "16px 4px 8px 8px" }}> */}
        <Typography variant="h6">The King Of Drugs</Typography>
        <Typography variant="body2" color="text.secondary">
          by BAK
        </Typography>
        {/* </CardContent> */}
      </Box>
    </Stack>
  );
};

export default function MediaCard(props) {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  if (props.type === "horizontal") {
    return <HorizontalMediaCard margin={props.margin} />;
  } else if (props.type === "vertical") {
    return <VerticalMediaCard upperTabletSize={upperTabletSize} />;
  } else if (props.type === "vertical2") {
    return <VerticalMediaCard2 upperTabletSize={upperTabletSize} />;
  } else {
    return <ImageMediaCard upperTabletSize={upperTabletSize} />;
  }
  // return props.type === "horizontal" ? (
  //   <HorizontalMediaCard props={props} />
  // ) : (
  //   <VerticalMediaCard upperTabletSize={upperTabletSize} />
  // );
  // props.type === "horizontal" ? horizontalMediaCard : verticalMediaCard;
}
