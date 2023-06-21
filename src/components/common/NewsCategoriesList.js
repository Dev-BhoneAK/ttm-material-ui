import React, { useEffect, useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomIcon from "../common/CustomIcon";
import { getLatestNewsByCategories } from "../../utils/api";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function NewsCategoriesList({ newsCategories, setLatestNews }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setActiveTabIndex(newValue);
  };

  useEffect(() => {
    getLatestNewsByCategories(newsCategories[activeTabIndex]?.id).then(
      (data) => {
        console.log(data);
        setLatestNews(data);
      }
    );
  }, [activeTabIndex]);
  return (
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
  );
}
