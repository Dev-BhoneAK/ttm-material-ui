import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

import HorizontalMediaCard from "../common/meida-cards/HorizontalMediaCard";
import VerticalMediaCard from "../common/meida-cards/VerticalMediaCard";
import CustomizedButton from "../common/CustomButton";
import SectionTitle from "../common/SectionTitle";
import CustomIcon from "../common/CustomIcon";
import { getLatestNewsByCategories } from "../../utils/api";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LatestNewsByCategories({
  newsCategories,
  sectionSpacing,
}) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [latestNews, setLatestNews] = useState([]);

  const handleChange = (event, newValue) => {
    setActiveTabIndex(newValue);
  };

  useEffect(() => {
    getLatestNewsByCategories(newsCategories[activeTabIndex]?.id).then(
      (data) => {
        setLatestNews(data);
      }
    );
  }, [activeTabIndex]);

  useEffect(() => {
    getLatestNewsByCategories(1).then((data) => {
      setLatestNews(data);
    });
  }, []);

  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="newspaper" title="Latest News By Categories" />
      <Tabs
        value={activeTabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          mb: { xs: 1, sm: 1.5 },
        }}
      >
        {newsCategories.map((newsCategory, index) => (
          <Tab
            label={newsCategory.name}
            key={newsCategory?.id}
            {...a11yProps(index)}
            icon={
              <CustomIcon
                icon={newsCategory.icon}
                styles={{ fontSize: { xs: "1rem", md: "1.5rem" }, mb: 1 }}
              />
            }
          />
        ))}
      </Tabs>
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
