import React from "react";
import { Box } from "@mui/material";

import { sectionSpacing } from "../../utils/commonStyle";
import MainAppBar from "../app-bar/MainAppBar";
import SearchBox from "../search-box";

export default function HeaderSection() {
  return (
    <>
      <MainAppBar sectionSpacing={sectionSpacing} />
      <Box sx={{ p: 2 }}>
        <SearchBox sectionSpacing={sectionSpacing} />
      </Box>
    </>
  );
}
