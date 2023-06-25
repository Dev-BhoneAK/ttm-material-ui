import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
}));

export default function CustomLink(props) {
  return <StyledLink {...props}> {props.children} </StyledLink>;
}
