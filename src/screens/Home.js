import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { getHomeData } from '../utils/api';
import { sectionSpacing, spaceFromNavigationBar } from '../utils/commonStyle';
import PopularCategories from '../components/home/PopularCategories';
import BackgroundGrey from '../components/common/BackgroundGrey';
import PopularNews from '../components/home/PopularNews';
import LatestNewsByCategories from '../components/home/LatestNewsByCategories';
import Novels from '../components/home/Novels';
import MobileTV from '../components/home/Videos';

export default function Home() {
    const [homeData, setHomeData] = useState({
        popularNews: [],
        newsCategories: [],
        novels: [],
        videos: []
    });

    useEffect(() => {
        async function fetchData() {
            const { popularNews, newsCategories, novels, videos } = await getHomeData();
            setHomeData({
                popularNews,
                newsCategories,
                novels,
                videos
            });
        }
        fetchData();
    }, []);
    return (
        <>
            <Box sx={{ p: '0.5rem 1.5rem' }}>
                <PopularCategories sectionSpacing={sectionSpacing} />
            </Box>
            <BackgroundGrey styles={sectionSpacing}>
                <PopularNews popularNews={homeData.popularNews} sectionSpacing={sectionSpacing} />

                <LatestNewsByCategories
                    newsCategories={homeData.newsCategories}
                    sectionSpacing={sectionSpacing}
                />
                <Novels novels={homeData.novels} />
            </BackgroundGrey>
            {/* <BackgroundGrey></BackgroundGrey> */}

            {/* </Box> */}
            <Box sx={{ p: '0 1.5rem', ...spaceFromNavigationBar }}>
                <MobileTV videos={homeData.videos} sectionSpacing={sectionSpacing} />
            </Box>
        </>
    );
}
