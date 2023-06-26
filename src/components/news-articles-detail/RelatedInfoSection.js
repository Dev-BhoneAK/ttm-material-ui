import React from "react";
import Stack from "@mui/material/Stack";

import CustomLink from "../common/CustomLink";
import SectionTitle from "../common/SectionTitle";
import BackgroundGrey from "../common/BackgroundGrey";
import HorizontalMediaCard from "../common/meida-cards/HorizontalMediaCard";

export default function RelatedInfoSection({ title, relatedNewsData }) {
  return (
    <BackgroundGrey>
      <SectionTitle title={`Related ${title}`} />
      <Stack spacing={2}>
        {relatedNewsData.map((relatedNews) => (
          <HorizontalMediaCard
            margin="true"
            key={relatedNews.id}
            data={relatedNews}
            width="100%"
          />
        ))}
      </Stack>
    </BackgroundGrey>
  );
}
