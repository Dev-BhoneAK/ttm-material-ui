import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { getSearchData } from '../utils/api';
import { RenderVideosList } from './VideosList';
import Novel from '../components/common/Novel';
import SectionTitle from '../components/common/SectionTitle';
import useUpperTabletSize from '../hooks/useUpperTabletSize';
import HeaderSection from '../components/common/HeaderSection';
import CustomTypo from '../components/common/CustomTypo';
import BackgroundGrey from '../components/common/BackgroundGrey';
import { NewsListMobileView, NewsListUpperTabletView } from './NewsList';
import BottomNavigationBar from '../components/app-bar/BottomNavigationBar';
import { sectionSpacing, spaceFromNavigationBar } from '../utils/commonStyle';
import useSearchData from '../hooks/useSearchData';
import { useEventCallback } from '@mui/material';
import SearchBox from '../components/search-box';

export default function SearchResults() {
    const upperTabletSize = useUpperTabletSize();
    const [searchParams, setSearchParams] = useSearchParams();
    const { searchData, setSearchData } = useSearchData();

    console.log('Search Data ', searchData);
    // const [searchData, setSearchData] = useState({
    //     news: [],
    //     novels: [],
    //     videos: []
    // });

    const fetchData = async (keyword) => {
        // if (keyword > 3) {
        const { novels, videos, news } = await getSearchData(keyword);
        setSearchData({
            news,
            novels,
            videos
        });
        // }
    };
    useEffect(() => {
        // console.log('searchnput ', searchInput.length);
        // async function fetchData(keyword) {
        //     const { novels, videos, news } = await getSearchData(keyword);
        //     setSearchData({
        //         news,
        //         novels,
        //         videos
        //     });
        // }
        fetchData(searchParams.get('keyword') ?? '');
    }, []);

    // useEffect(() => {}, [searchInput]);
    return (
        <>
            {/* <HeaderSection /> */}
            <SearchBox sectionSpacing={sectionSpacing} fetchData={fetchData} />
            <BackgroundGrey styles={{ ...sectionSpacing, ...spaceFromNavigationBar }}>
                <CustomTypo
                    variant="h4"
                    title="Search Results:"
                    styles={{ display: 'block', textAlign: 'center' }}
                />
                {!(
                    searchData?.news?.length ||
                    searchData?.novels?.length ||
                    searchData?.videos?.length
                ) && (
                    <CustomTypo
                        variant="h6"
                        title="No Result Found"
                        styles={{ display: 'block', textAlign: 'center' }}
                    />
                )}
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
