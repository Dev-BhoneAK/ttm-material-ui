import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import CustomLink from '../components/common/CustomLink';
import { getVideos } from '../utils/api';
import { sectionSpacing, spaceFromNavigationBar } from '../utils/commonStyle';
import BackgroundGrey from '../components/common/BackgroundGrey';
import VideoMediaCard from '../components/common/meida-cards/VideoMediaCard';

export default function VideosList() {
    const [videosData, setVideosData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const videos = await getVideos();
            setVideosData(videos);
        }
        fetchData();
    }, []);

    return (
        <>
            <BackgroundGrey styles={{ ...sectionSpacing, ...spaceFromNavigationBar }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <RenderVideosList videosList={videosData} />
                </Grid>
            </BackgroundGrey>
        </>
    );
}

export const RenderVideosList = ({ videosList }) => (
    <>
        {videosList.map((video) => (
            <Grid item xs={12} sm={6} key={video?.id}>
                <CustomLink to={`/videos/${video?.id}`}>
                    <VideoMediaCard data={video} />
                </CustomLink>
            </Grid>
        ))}
    </>
);

RenderVideosList.propTypes = {
    videosList: PropTypes.array
};
