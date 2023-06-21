import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { ImageOnlyMediaCard } from "./meida-cards/ImageMediaCard";

export default function Novel({ novelData }) {
  return (
    <>
      <Grid item xs={12} sm={6} key={novelData?.id}>
        <Stack direction="row" spacing={1}>
          <ImageOnlyMediaCard data={novelData} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <Typography variant="body1">{novelData?.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Mike BAK
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="contained">Read Now</Button>
              <Button variant="outlined">Add To Favorite</Button>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </>
  );
}
