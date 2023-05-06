import React, { useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import CustomTypo from "../components/common/CustomTypo";

import { getNewsDetail } from "../utils/api";
import ImageAppBar from "../components/news-articles-detail/ImageAppBar";
import ContentInfo from "../components/news-articles-detail/ContentInfo";
import RelatedInfoSection from "../components/news-articles-detail/RelatedInfoSection";
import { getLatestNewsByCategories } from "../utils/api";

export default function NewsArticlesDetail() {
  const theme = useTheme();
  let { news_id } = useParams();
  const [newsDetailData, setNewsDetailData] = useState(undefined);
  const [relatedNewsData, setRelatedNewsData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const newsDetail = await getNewsDetail(news_id);

      setNewsDetailData(newsDetail);
    }
    fetchData();
  }, []);

  useEffect(() => {
    getLatestNewsByCategories(1).then((data) => {
      setLoading(false);
      setRelatedNewsData(data);
    });
  }, []);

  return (
    <>
      <ImageAppBar image={newsDetailData?.image} />
      <Container sx={{ px: { xs: 2 }, py: { xs: 2 } }}>
        <CustomTypo variant="body1" title={newsDetailData?.title} />
        {/* <Typography variant="h6">{newsDetailData?.title}</Typography> */}
      </Container>
      <Divider variant="middle" />
      <ContentInfo
        publishedDate={newsDetailData?.publishedDate}
        viewCount={newsDetailData?.viewCount}
      />
      <Divider variant="middle" />
      <Container sx={{ px: { xs: 2 }, py: { xs: 2 } }}>
        <CustomTypo variant="body2" title={newsDetailData?.content} />
      </Container>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <RelatedInfoSection relatedNewsData={relatedNewsData} title="News" />
      )}
    </>
  );
}
