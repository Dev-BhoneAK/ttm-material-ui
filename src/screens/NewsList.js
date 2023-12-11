import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

import CustomLink from '../components/common/CustomLink';
import { getCategories } from '../utils/api';
import { sectionSpacing } from '../utils/commonStyle';
import MainAppBar from '../components/app-bar/MainAppBar';
import SearchBox from '../components/search-box';
import BackgroundGrey from '../components/common/BackgroundGrey';
import BottomNavigationBar from '../components/app-bar/BottomNavigationBar';
import NewsCategoriesList from '../components/common/NewsCategoriesList';
import HorizontalMediaCard from '../components/common/meida-cards/HorizontalMediaCard';
import VerticalMediaCard from '../components/common/meida-cards/VerticalMediaCard';
import { getLatestNewsByCategories } from '../utils/api';
import useUpperTabletSize from '../hooks/useUpperTabletSize';

export default function NewsList() {
    const [newsCategoriesData, setNewsCategoriesData] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const upperTabletSize = useUpperTabletSize();

    useEffect(() => {
        async function fetchData() {
            const newsCategories = await getCategories('news');
            setNewsCategoriesData(newsCategories);
        }
        fetchData();
    }, []);

    useEffect(() => {
        getLatestNewsByCategories(1).then((data) => {
            setLatestNews(data);
        });
    }, []);
    return (
        <>
            <MainAppBar sectionSpacing={sectionSpacing} />
            <Box sx={{ p: '0.5rem 1.5rem' }}>
                <SearchBox sectionSpacing={sectionSpacing} />
            </Box>
            <BackgroundGrey styles={sectionSpacing}>
                <Box>
                    <NewsCategoriesList
                        newsCategories={newsCategoriesData}
                        setLatestNews={setLatestNews}
                    />
                    <Grid container spacing={2}>
                        {/* {upperTabletSize
              ? NewsListUpperTabletView({ latestNews })
              : NewsListMobileView({ latestNews })} */}
                        {upperTabletSize ? (
                            <NewsListUpperTabletView newsList={latestNews} />
                        ) : (
                            <NewsListMobileView newsList={latestNews} />
                        )}
                    </Grid>
                </Box>
            </BackgroundGrey>
            <BottomNavigationBar />
        </>
    );
}

export const NewsListMobileView = ({ newsList }) => {
    const [firstNew, ...restNews] = newsList;
    return (
        <>
            <Grid item xs={12}>
                <CustomLink to={`/news/${firstNew?.id}`}>
                    <VerticalMediaCard data={firstNew} />
                </CustomLink>
            </Grid>
            {restNews.map((data) => (
                <Grid item xs={12} key={data?.id}>
                    <CustomLink to={`/news/${data?.id}`}>
                        <HorizontalMediaCard margin={false} data={data} />
                    </CustomLink>
                </Grid>
            ))}
        </>
    );
};

NewsListMobileView.propTypes = {
    newsList: PropTypes.array
};

export const NewsListUpperTabletView = ({ newsList }) => (
    <>
        {newsList.map((data, index) => (
            <Grid item sm={6} key={data?.id}>
                <CustomLink to={`/news/${data?.id}`}>
                    <VerticalMediaCard data={data} />
                </CustomLink>
            </Grid>
        ))}
    </>
);

NewsListUpperTabletView.propTypes = {
    newsList: PropTypes.array
};
