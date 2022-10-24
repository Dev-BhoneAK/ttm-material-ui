import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarsIcon from "@mui/icons-material/Stars";
import SectionTitle from "../common/SectionTitle";
import CategoryPaper from "../common/CategoryPaper";
import Stack from "@mui/material/Stack";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function PopularCategories() {
  const theme = useTheme();
  const upperTabletSize = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <SectionTitle icon={<StarsIcon />} title="Popular Categories" />
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
      >
        <CategoryPaper icon="question_answer" title="Q&A" />
        <CategoryPaper icon="question_answer" title="Q&A" />
        <CategoryPaper icon="live_tv" title="Live TV" />
        <CategoryPaper icon="live_tv" title="Live TV" />
        <CategoryPaper icon="live_tv" title="Live TV" />
        {upperTabletSize && <CategoryPaper icon="live_tv" title="Live TV" />}
      </Stack>
    </>
  );
}
