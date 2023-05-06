import React from "react";
import { Stack, Box } from "@mui/material";

import CustomIcon from "../common/CustomIcon";
import CustomTypo from "../common/CustomTypo";

export default function ContentInfo(props) {
  const iconStyles = {
    fontSize: { xs: "1.3rem", md: "1.8rem" },
    marginRight: { xs: "0.1rem", md: "0.2rem" },
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: { xs: 2 }, py: { xs: 2 } }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomIcon icon="calendar_month" styles={iconStyles} />
        <CustomTypo variant="subtitle1" title={props?.publishedDate} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomIcon icon="visibility" styles={iconStyles} />
        <CustomTypo variant="subtitle1" title={props?.viewCount} />
      </Stack>
      <CustomIcon icon="star" styles={iconStyles} />
    </Stack>
  );
}
