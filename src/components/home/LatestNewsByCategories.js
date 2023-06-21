import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import NewsCategoriesList from "../common/NewsCategoriesList";
import HorizontalMediaCard from "../common/meida-cards/HorizontalMediaCard";
import VerticalMediaCard from "../common/meida-cards/VerticalMediaCard";
import CustomizedButton from "../common/CustomButton";
import SectionTitle from "../common/SectionTitle";
import { getLatestNewsByCategories } from "../../utils/api";

export default function LatestNewsByCategories({
  newsCategories,
  sectionSpacing,
}) {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    getLatestNewsByCategories(1).then((data) => {
      setLatestNews(data);
    });
  }, []);

  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="newspaper" title="Latest News By Categories" />
      <NewsCategoriesList newsCategories={newsCategories} setLatestNews={setLatestNews}/>
      <Grid container spacing={2}>
        {latestNews.map((data, index) =>
          index < 2 ? (
            <Grid
              item
              xs={12}
              sm={6}
              key={data?.id}
              sx={{
                display: index === 1 ? { xs: "none", sm: "block" } : undefined,
              }}
            >
              <VerticalMediaCard data={data} />
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} key={data?.id}>
              <HorizontalMediaCard margin="false" data={data} />
            </Grid>
          )
        )}
      </Grid>

      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ mt: 1.5, display: "flex" }}
          justifyContent="center"
        >
          <CustomizedButton />
        </Grid>
      </Grid>
    </Box>
  );
}
