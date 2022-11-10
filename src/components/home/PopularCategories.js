import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SectionTitle from "../common/SectionTitle";
import CategoryPaper from "../common/CategoryPaper";
import Stack from "@mui/material/Stack";

export default function PopularCategories() {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <SectionTitle icon="stars" title="Popular Categories" />
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
      >
        <CategoryPaper icon="question_answer" title="Q&A" />
        <CategoryPaper icon="thunderstorm" title="Weather" />
        <CategoryPaper icon="calendar_month" title="Events" />
        <CategoryPaper icon="article" title="Articles" />
        <CategoryPaper icon="outdoor_grill" title="Cooking" />
        {upperTabletSize && <CategoryPaper icon="widgets" title="Lucky Draw" />}
      </Stack>
    </>
  );
}
