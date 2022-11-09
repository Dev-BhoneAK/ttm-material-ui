import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { grey, purple } from "@mui/material/colors";

const StyledLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
}));

export default function CustomLink(props) {
  return <StyledLink {...props} />;
}
