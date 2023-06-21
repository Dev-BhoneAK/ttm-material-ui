import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import useUpperTabletSize from "../../../hooks/useUpperTabletSize";
import CustomLink from "../CustomLink";

export const ImageOnlyMediaCard = ({ data }) => {
  const upperTabletSize = useUpperTabletSize();
  return (
    <CardMedia
      component="img"
      height={upperTabletSize ? "220px" : "180px"}
      sx={{
        width: upperTabletSize ? "140px" : "120px",
        boxShadow: "0 3px 10px -2px black",
        borderRadius: "12px",
        mb: { xs: 1, sm: 1.5 },
      }}
      image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
      alt={data?.title}
    />
  );
};

export default function ImageMediaCard({ data }) {
  return (
    <CustomLink to={`/videos/${data?.id}`}>
      <Stack alignItems="center" sx={{ mr: 6 }}>
        <ImageOnlyMediaCard data={data} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">{data?.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            by BAK
          </Typography>
        </Box>
      </Stack>
    </CustomLink>
  );
}
