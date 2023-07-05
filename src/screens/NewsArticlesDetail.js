import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";

import CustomTypo from "../components/common/CustomTypo";
import CustomImage from "../components/common/CustomImage";
import useUpperTabletSize from "../hooks/useUpperTabletSize";
import CustomLink from "../components/common/CustomLink";
import TransparentAppBar from "../components/app-bar/TransparentAppBar";
import ContentInfo from "../components/common/ContentInfo";
import VerticalMediaCard from "../components/common/meida-cards/VerticalMediaCard";
import HorizontalMediaCard from "../components/common/meida-cards/HorizontalMediaCard";
import RelatedInfoSection from "../components/common/RelatedInfoSection";
import { getNewsDetail } from "../utils/api";
import { getLatestNewsByCategories } from "../utils/api";

export default function NewsArticlesDetail() {
  const { news_id } = useParams();
  const [newsDetailData, setNewsDetailData] = useState(undefined);
  const [relatedNewsData, setRelatedNewsData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const newsDetail = await getNewsDetail(news_id);

      setNewsDetailData(newsDetail);
    }
    fetchData();
  }, [news_id]);

  useEffect(() => {
    getLatestNewsByCategories(1).then((data) => {
      setLoading(false);
      setRelatedNewsData(data);
    });
  }, [news_id]);

  return (
    <>
      <TransparentAppBar>
        <CustomImage
          imageSrc={`${process.env.REACT_APP_API_DOMAIN}/assets${newsDetailData?.image}`}
        />
      </TransparentAppBar>

      <Container sx={{ px: { xs: 2 }, py: { xs: 2 } }}>
        <CustomTypo variant="body1" title={newsDetailData?.title} />
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
        <RelatedInfoSection
          renderedData={<RenderRelatedNews relatedNewsData={relatedNewsData} />}
          title="News"
        />
      )}
    </>
  );
}

const RenderRelatedNews = ({ relatedNewsData }) => {
  const upperTabletSize = useUpperTabletSize();
  return relatedNewsData.map((data) => (
    <Grid item xs={12} sm={6} key={data?.id}>
      <CustomLink to={`/news/${data?.id}`}>
        {upperTabletSize ? (
          <VerticalMediaCard data={data} />
        ) : (
          <HorizontalMediaCard margin="false" data={data} />
        )}
      </CustomLink>
    </Grid>
  ));
};
