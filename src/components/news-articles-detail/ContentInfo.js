import React from "react";
import { Stack, Box } from "@mui/material";

import CustomIcon from "../common/CustomIcon";
import CustomTypo from "../common/CustomTypo";

export default function ContentInfo(props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: { xs: 2 }, py: { xs: 2 } }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomIcon icon="calendar_month" />
        <CustomTypo variant="subtitle1" title={props?.publishedDate} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomIcon icon="visibility" />
        <CustomTypo variant="subtitle1" title={props?.viewCount} />
      </Stack>
    </Stack>
  );
}
