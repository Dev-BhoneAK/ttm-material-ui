import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomLink from "../common/CustomLink";

import SectionTitle from "../common/SectionTitle";
import CategoryPaper from "../common/CategoryPaper";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export default function PopularCategories({ sectionSpacing }) {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={{ ...sectionSpacing }}>
      <SectionTitle icon="stars" title="Popular Categories" />
      <Stack
        direction="row"
        // spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <CustomLink to="question-answer">
          <CategoryPaper icon="question_answer" title="Q&A" />
        </CustomLink>
        <CustomLink to="weather">
          <CategoryPaper icon="thunderstorm" title="Weather" />
        </CustomLink>
        <CategoryPaper icon="calendar_month" title="Events" />
        <CategoryPaper icon="article" title="Articles" />
        <CategoryPaper icon="currency_exchange" title="Currency" />
        {/* {upperTabletSize && <CategoryPaper icon="widgets" title="Lucky Draw" />} */}
      </Stack>
    </Box>
  );
}
