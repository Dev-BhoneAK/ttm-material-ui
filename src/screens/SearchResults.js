import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';

import { getHomeData } from '../utils/api';
import { RenderVideosList } from './VideosList';
import Novel from '../components/common/Novel';
import SectionTitle from '../components/common/SectionTitle';
import useUpperTabletSize from '../hooks/useUpperTabletSize';
import HeaderSection from '../components/common/HeaderSection';
import BackgroundGrey from '../components/common/BackgroundGrey';
import { NewsListMobileView, NewsListUpperTabletView } from './NewsList';
import BottomNavigationBar from '../components/app-bar/BottomNavigationBar';
import { sectionSpacing, spaceFromNavigationBar } from '../utils/commonStyle';

export default function SearchResults() {
    const upperTabletSize = useUpperTabletSize();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchData, setSearchData] = useState({
        news: [],
        novels: [],
        videos: []
    });

    useEffect(() => {
        async function fetchData(keyword) {
            const { novels, videos, news } = await getHomeData(keyword);
            setSearchData({
                news,
                novels,
                videos
            });
        }
        fetchData(searchParams.get('keyword'));
    }, []);
    return (
        <>
            <HeaderSection />
            <BackgroundGrey styles={{ ...sectionSpacing, ...spaceFromNavigationBar }}>
                {searchData?.news?.length > 0 && (
                    <>
                        <SectionTitle icon="newspaper" title="News" />

                        <Grid container spacing={2}>
                            {upperTabletSize ? (
                                <NewsListUpperTabletView newsList={searchData?.news} />
                            ) : (
                                <NewsListMobileView newsList={searchData?.news} />
                            )}
                        </Grid>
                        <Divider variant="middle" sx={{ my: 3 }} />
                    </>
                )}
                {searchData?.novels?.length > 0 && (
                    <>
                        <SectionTitle icon="menu_book" title="Novels" />

                        <Grid container spacing={2}>
                            {searchData?.novels.map((novel) => (
                                <Novel key={novel.id} novelData={novel} />
                            ))}
                        </Grid>
                        <Divider variant="middle" sx={{ my: 3 }} />
                    </>
                )}
                {searchData?.videos?.length > 0 && (
                    <>
                        <SectionTitle icon="live_tv" title="Mobile TV" />

                        <Grid container spacing={2}>
                            <RenderVideosList videosList={searchData?.videos} />
                        </Grid>
                    </>
                )}
            </BackgroundGrey>
            <BottomNavigationBar />
        </>
    );
}
