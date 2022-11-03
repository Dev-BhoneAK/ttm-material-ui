import * as React from "react";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function CategoryPaper(props) {
  return (
    <Stack
      spacing={1}
      alignItems="center"
      sx={{ marginRight: props.name === "news" && { xs: 3, md: 5 } }}
    >
      <Paper
        elevation={3}
        onClick={() => props.setActiveSlide(props.index)}
        sx={{
          width: { xs: 50, md: 80 },
          height: { xs: 50, md: 80 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          sx={{
            fontSize: { xs: 20, md: 32 },
            color: props.index && props.index === props.activeSlide && "blue",
          }}
        >
          {props.icon}
        </Icon>
      </Paper>
      <Typography
        color={props.index && props.index === props.activeSlide && "blue"}
      >
        {props.title}
      </Typography>
    </Stack>
  );
}
