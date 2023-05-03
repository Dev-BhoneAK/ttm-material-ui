import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import TuneIcon from "@mui/icons-material/Tune";
import { Container, Box } from "@mui/material";

export default function SearchBox() {
  return (
    <Container>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          border: "0.7px solid rgba(0,0,0,0.2)",
          boxShadow: "none",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="What are you looking for?"
          inputProps={{ "aria-label": "search box" }}
        />

        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="filter">
          <TuneIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
