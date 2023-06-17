import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import TuneIcon from "@mui/icons-material/Tune";
import { Box } from "@mui/material";

export default function SearchBox({ sectionSpacing }) {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
  ];
  return (
    <Box sx={{ ...sectionSpacing }}>
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
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="filter">
          <TuneIcon />
        </IconButton> */}
      </Paper>
    </Box>
  );
}
