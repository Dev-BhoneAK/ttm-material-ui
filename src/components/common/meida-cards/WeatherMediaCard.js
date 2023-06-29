import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ReactAnimatedWeather from "react-animated-weather";

import useDarkLightTheme from "../../../hooks/useDarkLightTheme";
import CustomIcon from "../CustomIcon";
import { Grid } from "@mui/material";

const WeatherMediaCard = React.forwardRef(function (props, ref) {
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
        mb: { xs: 2, sm: 3 },
        borderTop: "1px solid #e5e5e5",
      }}
      ref={ref}
      {...props}
    >
      <Grid container>
        <Grid
          item
          xs={4}
          sm={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" noWrap>
            {props.forecast}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26˚C - 35˚C
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sm={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              background: blueBox, //"#1E88E5",
              width: 100,
              height: 100,
              alignSelf: "center",
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
        </Grid>
        <Grid
          item
          xs={4}
          sm={5}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 6 }}
          >
            <Stack
              justifyContent="flex-start"
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <CustomIcon icon="waves" />
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="center"
              >
                <Typography variant="body1">88%</Typography>
                <Typography variant="body2">Humidity</Typography>
              </Stack>
            </Stack>
            <Stack
              justifyContent="flex-start"
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <CustomIcon icon="air" />
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="center"
              >
                <Typography variant="body1" sx={{ color: textColor }}>
                  3Km/h
                </Typography>
                <Typography variant="body2">Wind</Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* <Grid container>
            <Grid item xs={12} sm={6}>
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <CustomIcon icon="waves" />
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="center"
                >
                  <Typography variant="body1">88%</Typography>
                  <Typography variant="body2">Humidity</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <CustomIcon icon="air" />
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="center"
                >
                  <Typography variant="body1" sx={{ color: textColor }}>
                    3Km/h
                  </Typography>
                  <Typography variant="body2">Wind</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid> */}
          {/* </Stack> */}
        </Grid>
      </Grid>
    </Card>
  );
});

export default WeatherMediaCard;
