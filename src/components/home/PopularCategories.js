import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import SectionTitle from "../common/SectionTitle";
import CategoryPaper from "../common/CategoryPaper";
import Stack from "@mui/material/Stack";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function PopularCategories() {
  return (
    <>
      <SectionTitle icon={<StarsIcon />} title="Popular Categories" />
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
      >
        <CategoryPaper icon={<QuestionAnswerIcon />} />
        <CategoryPaper icon={<LiveTvIcon />} />
        <CategoryPaper icon={<LiveTvIcon />} />
        <CategoryPaper icon={<LiveTvIcon />} />
        <CategoryPaper icon={<LiveTvIcon />} />
      </Stack>
    </>
  );
}
