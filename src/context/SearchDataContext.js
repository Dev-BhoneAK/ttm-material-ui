import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSearchData } from '../utils/api';

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
    const [searchParams] = useSearchParams();

    const [searchData, setSearchData] = useState({
        news: [],
        novels: [],
        videos: []
    });

    const fetchData = async (keyword) => {
        const { novels, videos, news } = await getSearchData(keyword);
        console.log('news ', news);
        setSearchData({
            news,
            novels,
            videos
        });
    };
    useEffect(() => {
        fetchData(searchParams.get('keyword') ?? '');
    }, []);
    return (
        <SharedStateContext.Provider value={{ searchData, fetchData }}>
            {children}
        </SharedStateContext.Provider>
    );
};

export const useSharedState = () => {
    const context = useContext(SharedStateContext);
    if (!context) {
        throw new Error('useSharedState must be used within a SharedStateProvider');
    }
    return context;
};

SharedStateProvider.propTypes = {
    children: PropTypes.node
};
