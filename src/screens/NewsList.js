import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import CustomLink from '../components/common/CustomLink';
import { getCategories, getLatestNewsByCategories } from '../utils/api';
import { sectionSpacing, spaceFromNavigationBar } from '../utils/commonStyle';
import BackgroundGrey from '../components/common/BackgroundGrey';
import NewsCategoriesList from '../components/common/NewsCategoriesList';
import HorizontalMediaCard from '../components/common/meida-cards/HorizontalMediaCard';
import VerticalMediaCard from '../components/common/meida-cards/VerticalMediaCard';
import useUpperTabletSize from '../hooks/useUpperTabletSize';

export default function NewsList() {
    // const [newsCategoriesData, setNewsCategoriesData] = useState([]);
    // const [latestNews, setLatestNews] = useState([]);
    const upperTabletSize = useUpperTabletSize();
    const { data: newsCategories } = useQuery({
        queryKey: ['categories', { parentCategory: 'news' }],
        queryFn: getCategories
    });
    const localNews = newsCategories?.[0].id; // Because Placing local news at First Tab

    const { data: latestNews } = useQuery({
        queryKey: ['news', { categoryId: 1 }],
        queryFn: getLatestNewsByCategories,
        enabled: !!localNews
    });

    console.log('newssss', latestNews);

    // useEffect(() => {
    //     async function fetchData() {
    //         const newsCategories = await getCategories('news');
    //         setNewsCategoriesData(newsCategories);
    //     }
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     getLatestNewsByCategories(1).then((data) => {
    //         setLatestNews(data);
    //     });
    // }, []);
    return (
        <>
            <BackgroundGrey styles={{ ...sectionSpacing, ...spaceFromNavigationBar }}>
                <Box>
                    <NewsCategoriesList
                        newsCategories={newsCategories}
                        // setLatestNews={setLatestNews}
                    />
                    {/* <Grid container spacing={2}>
                        {upperTabletSize ? (
                            <NewsListUpperTabletView newsList={latestNews} />
                        ) : (
                            <NewsListMobileView newsList={latestNews} />
                        )}
                    </Grid> */}
                </Box>
            </BackgroundGrey>
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
