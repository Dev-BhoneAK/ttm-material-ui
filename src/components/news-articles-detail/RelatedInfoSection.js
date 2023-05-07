import React from "react";
import Stack from "@mui/material/Stack";

import SectionTitle from "../common/SectionTitle";
import BackgroundGrey from "../common/BackgroundGrey";
import MediaCard from "../common/MediaCard";
import useUpperTabletSize from "../../hooks/useUpperTabletSize";

export default function RelatedInfoSection({ title, relatedNewsData }) {
  return (
    <BackgroundGrey>
      <SectionTitle title={`Related ${title}`} />
      <Stack spacing={2}>
        {relatedNewsData.map((relatedNews) => (
          <MediaCard
            type="horizontal"
            margin="true"
            key={relatedNews.id}
            data={relatedNews}
            width="100%"
            // width={upperTabletSize ? "380px" : "280px"}
          />
        ))}
      </Stack>
    </BackgroundGrey>
  );
}
