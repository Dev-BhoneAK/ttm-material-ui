import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CustomIcon from "../common/CustomIcon";
import CustomTypo from "../common/CustomTypo";

export default function CategoryPaper(props) {
  return (
    <Stack
      spacing={1}
      alignItems="center"
      sx={{ marginRight: props.name === "news" && { xs: 3, md: 5 } }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: 50, md: 80 },
          height: { xs: 50, md: 80 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomIcon
          icon={props.icon}
          // styles={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        />
      </Paper>
      {/*<Typography*/}
      {/*  color={props.index && props.index === props.activeSlide && "blue"}*/}
      {/*>*/}
      {/*  {props.title}*/}
      {/*</Typography>*/}
      <CustomTypo title={props.title} variant="body1" />
    </Stack>
  );
}
