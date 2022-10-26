import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarsIcon from "@mui/icons-material/Stars";
import SectionTitle from "../common/SectionTitle";
import CategoryPaper from "../common/CategoryPaper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MediaCard from "../common/MediaCard";

export default function LatestNewsByCategories() {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {upperTabletSize ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MediaCard type="vertical" />
          </Grid>
          <Grid item xs={12} md={6}>
            <MediaCard type="vertical" />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MediaCard type="vertical" />
          </Grid>
          <Grid item xs={12}>
            <MediaCard type="horizontal" margin="false" />
          </Grid>
          <Grid item xs={12}>
            <MediaCard type="horizontal" margin="false" />
          </Grid>
        </Grid>
      )}
    </>
  );
}
