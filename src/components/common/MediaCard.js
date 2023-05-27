import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import useDarkLightTheme from "../../hooks/useDarkLightTheme";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CustomLink from "./CustomLink";
import ReactAnimatedWeather from "react-animated-weather";

const HorizontalMediaCard = ({ data, margin, width }) => {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  const paddingValue = upperTabletSize ? "16px" : "8px";
  return (
    <Card
      sx={{
        mr: margin === "true" && 1.5,
        width: width,
      }}
    >
      <CustomLink to={`/news/${data?.id}`}>
        <CardActionArea
          sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, mr: "8px" }}
            image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
            alt={data?.title}
          />
          <CardContent sx={{ padding: 0 }}>
            <Typography
              sx={{
                maxWidth: "100%",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                variant: "subtitle2",
              }}
            >
              {data?.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CustomLink>
    </Card>
  );
};

const VerticalMediaCard = ({ data }) => {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card>
      <CustomLink to={`/news/${data?.id}`}>
        <CardMedia
          component="img"
          height={upperTabletSize ? "240px" : "200px"}
          image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
          alt={data?.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data?.title}
          </Typography>
        </CardContent>
      </CustomLink>
    </Card>
  );
};

const VideoCard = ({ data }) => {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return (
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data?.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ImageMediaCard = ({ data }) => {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Stack alignItems="center" sx={{ mr: 6 }}>
      <CardMedia
        component="img"
        height={upperTabletSize ? "220px" : "180px"}
        sx={{
          width: upperTabletSize ? "140px" : "120px",
          boxShadow: "0 3px 10px -2px black",
          borderRadius: "12px",
          mb: { xs: 1, sm: 1.5 },
        }}
        image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
        alt={data?.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">{data?.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          by BAK
        </Typography>
      </Box>
    </Stack>
  );
};

export default function MediaCard(props) {
  if (props.type === "horizontal") {
    return <HorizontalMediaCard {...props} />;
  } else if (props.type === "vertical") {
    return <VerticalMediaCard data={props.data} />;
  } else if (props.type === "video") {
    return <VideoCard data={props.data} />;
  } else {
    return <ImageMediaCard data={props.data} />;
  }
}

export const WeatherCard = React.forwardRef(function (props, ref) {
  const { blueBox, whiteBox, textColor } = useDarkLightTheme();
  const defaults = {
    color: "white",
    size: 50,
    animate: true,
  };
  return (
    <Card
      sx={{
        width: "100%",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        mb: { xs: 2, sm: 3 },
        borderTop: "1px solid #e5e5e5",
      }}
      ref={ref}
      {...props}
    >
      <Typography
        sx={{
          variant: "subtitle2",
        }}
      >
        {props.date}
      </Typography>
      <Box
        sx={{
          background: blueBox, //"#1E88E5",
          width: 100,
          height: 100,
        }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Box
            sx={{
              background: whiteBox,
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // px: { xs: 2, sm: 3 },
              // py: { xs: 0.5, sm: 1 },
            }}
          >
            <Typography variant="subtitle2" sx={{ color: textColor }}>
              {props.day}
            </Typography>
          </Box>
          <ReactAnimatedWeather
            icon={props.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </Stack>
      </Box>
      <Typography
        sx={{
          variant: "subtitle2",
        }}
      >
        26˚C - 35˚C
      </Typography>
    </Card>
  );
});

// export const WeatherCard = ({ date, icon, temperature }) => {
//   const theme = useTheme();
//   const defaults = {
//     color: "white",
//     size: 50,
//     animate: true,
//   };
//   return (
//     <Card
//       sx={{
//         width: "100%",
//         height: 100,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-evenly",
//         mb: { xs: 2, sm: 3 },
//         borderTop: "1px solid #e5e5e5",
//       }}
//     >
//       <Typography
//         sx={{
//           variant: "subtitle2",
//         }}
//       >
//         {date}
//       </Typography>
//       <Box
//         sx={{
//           background: "#1876d1",
//           width: 100,
//           height: 100,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <ReactAnimatedWeather
//           icon={icon}
//           color={defaults.color}
//           size={defaults.size}
//           animate={defaults.animate}
//         />
//       </Box>
//       <Typography
//         sx={{
//           variant: "subtitle2",
//         }}
//       >
//         26˚C - 35˚C
//       </Typography>
//     </Card>
//   );
// };
