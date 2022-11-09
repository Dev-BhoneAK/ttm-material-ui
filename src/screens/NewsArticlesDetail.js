import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";

import { getNewsDetail } from "../utils/api";
import ImageAppBar from "../components/news-articles-detail/ImageAppBar";

export default function NewsArticlesDetail() {
  const theme = useTheme();
  let { news_id } = useParams();
  const [newsDetailData, setNewsDetailData] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const newsDetail = await getNewsDetail(news_id);
      console.log("newsDetail", newsDetail[0]);
      setNewsDetailData(newsDetail[0]);
    }
    fetchData();
  }, []);
  return (
    <>
      <ImageAppBar image={newsDetailData?.image} />
    </>
  );
}
