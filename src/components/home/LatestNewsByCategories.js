import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { grey } from "@mui/material/colors";

import MediaCard from "../common/MediaCard";
import CustomizedButton from "../common/CustomButton";

export default function LatestNewsByCategories({ latestNews }) {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {upperTabletSize ? (
        <Grid container spacing={2}>
          <Grid item md={6}>
            <MediaCard
              type="vertical"
              key={latestNews[0]?.id}
              data={latestNews[0]}
            />
          </Grid>
          <Grid item md={6}>
            <MediaCard
              type="vertical"
              key={latestNews[1]?.id}
              data={latestNews[1]}
            />
          </Grid>
          <Grid item md={6}>
            <MediaCard
              type="horizontal"
              margin="false"
              key={latestNews[2]?.id}
              data={latestNews[2]}
            />
          </Grid>
          <Grid item md={6}>
            <MediaCard
              type="horizontal"
              margin="false"
              key={latestNews[3]?.id}
              data={latestNews[3]}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MediaCard
              type="vertical"
              key={latestNews[0]?.id}
              data={latestNews[0]}
            />
          </Grid>
          <Grid item xs={12}>
            <MediaCard
              type="horizontal"
              margin="false"
              key={latestNews[1]?.id}
              data={latestNews[1]}
            />
          </Grid>
          <Grid item xs={12}>
            <MediaCard
              type="horizontal"
              margin="false"
              key={latestNews[2]?.id}
              data={latestNews[2]}
            />
          </Grid>
        </Grid>
      )}
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={5} sx={{ mt: 1.5 }}>
          {/* <Button
            variant="contained"
            fullWidth
            endIcon={<NavigateNextIcon />}
            sx={{
              backgroundColor:
                theme.palette.mode === "dark" ? "inherit" : "#fff",
              color: theme.palette.mode === "dark" ? "#fff" : grey[800],
            }}
          >
            View More
          </Button> */}
          <CustomizedButton />
        </Grid>
      </Grid>
    </>
  );
}
