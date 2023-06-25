import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import CustomLink from "../CustomLink";
import SectionTitle from "../common/SectionTitle";
import CustomizedButton from "../common/CustomButton";
import { getLatestNewsByCategories } from "../../utils/api";
import NewsCategoriesList from "../common/NewsCategoriesList";
import VerticalMediaCard from "../common/meida-cards/VerticalMediaCard";
import HorizontalMediaCard from "../common/meida-cards/HorizontalMediaCard";

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
      <NewsCategoriesList
        newsCategories={newsCategories}
        setLatestNews={setLatestNews}
      />
      <Grid container spacing={2}>
        {latestNews.map((data, index) => (
          <RenderNewsMediaCard data={data} index={index} />
        ))}
        {/* {latestNews.map((data, index) =>
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
              <CustomLink to={`/news/${data?.id}`}>
                <VerticalMediaCard data={data} />
              </CustomLink>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} key={data?.id}>
              <CustomLink to={`/news/${data?.id}`}>
                <HorizontalMediaCard margin="false" data={data} />
              </CustomLink>
            </Grid>
          )
        )} */}
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

const RenderNewsMediaCard = ({ data, index }) => {
  return (
    <CustomLink to={`/news/${data?.id}`}>
      <Grid
        item
        xs={12}
        sm={6}
        key={data?.id}
        sx={{
          display: index === 1 ? { xs: "none", sm: "block" } : undefined,
        }}
      >
        {index < 2 ? (
          <VerticalMediaCard data={data} />
        ) : (
          <HorizontalMediaCard margin="false" data={data} />
        )}
      </Grid>
    </CustomLink>
  );
};
