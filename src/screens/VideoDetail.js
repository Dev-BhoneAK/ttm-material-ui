import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import CustomTypo from "../components/common/CustomTypo";
import ReactPlayer from "react-player/file";

import useUpperTabletSize from "../hooks/useUpperTabletSize";
import CustomLink from "../components/common/CustomLink";
import ImageAppBar from "../components/app-bar/ImageAppBar";
import ContentInfo from "../components/common/ContentInfo";
import VideoMediaCard from "../components/common/meida-cards/VideoMediaCard";
import RelatedInfoSection from "../components/common/RelatedInfoSection";
import { getVideoDetail } from "../utils/api";
import { getVideos } from "../utils/api";

export default function VideoDetail() {
  const { video_id } = useParams();
  const [videoDetailData, setVideoDetailData] = useState(undefined);
  const [relatedVideosData, setRelatedVideosData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const videoDetail = await getVideoDetail(video_id);

      setVideoDetailData(videoDetail);
    }
    fetchData();
  }, []);

  useEffect(() => {
    getVideos().then((data) => {
      setLoading(false);
      setRelatedVideosData(data);
    });
  }, []);

  return (
    <>
      {/* <ImageAppBar image={videoDetailData?.image} /> */}
      <ReactPlayer
        url={`${process.env.REACT_APP_API_DOMAIN}/assets${videoDetailData?.video}`}
        controls={true}
        width="100%"
        playing={true}
      />
      <Container sx={{ px: { xs: 2 }, py: { xs: 2 } }}>
        <CustomTypo variant="body1" title={videoDetailData?.title} />
      </Container>
      <Divider variant="middle" />
      <ContentInfo
        publishedDate={videoDetailData?.publishedDate}
        viewCount={videoDetailData?.viewCount}
      />
      <Divider variant="middle" />
      <Container sx={{ px: { xs: 2 }, py: { xs: 2 } }}>
        <CustomTypo variant="body2" title={videoDetailData?.description} />
      </Container>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <RelatedInfoSection
          renderedData={
            <RenderRelatedVideos relatedVideosData={relatedVideosData} />
          }
          title="Videos"
        />
      )}
    </>
  );
}

const RenderRelatedVideos = ({ relatedVideosData }) => {
  return relatedVideosData.map((data) => (
    <Grid item xs={12} sm={6} key={data?.id}>
      <CustomLink to={`/videos/${data?.id}`}>
        <VideoMediaCard data={data} margin="true" />
      </CustomLink>
    </Grid>
  ));
};
