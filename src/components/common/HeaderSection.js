import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { sectionSpacing } from '../../utils/commonStyle';
import MainAppBar from '../app-bar/MainAppBar';
import SearchBox from '../search-box';
import { SharedStateProvider } from '../../context/SearchDataContext';
export default function HeaderSection({ children }) {
    return (
        <>
            <MainAppBar sectionSpacing={sectionSpacing} />
            <Box sx={{ p: 2 }}>
                <SharedStateProvider>
                    <SearchBox sectionSpacing={sectionSpacing} />
                    {children}
                </SharedStateProvider>
            </Box>
        </>
    );
}

HeaderSection.propTypes = {
    children: PropTypes.node
};
