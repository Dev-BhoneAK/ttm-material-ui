import { Container } from "@mui/material";
import React from "react";
import MainAppBar from "../components/app-bar/MainAppBar";
import SearchBox from "../components/SearchBox";
import PopularCategories from "../components/home/PopularCategories";

export default function Home() {
  return (
    <>
      <MainAppBar />
      <Container sx={{ p: "12px 16px" }}>
        <SearchBox />
        <PopularCategories />
      </Container>
    </>
  );
}
