import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from '../common/CustomLink';

import SectionTitle from '../common/SectionTitle';
import CategoryPaper from '../common/CategoryPaper';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function PopularCategories({ sectionSpacing }) {
    return (
        <Box sx={{ ...sectionSpacing }}>
            <SectionTitle icon="stars" title="Popular Categories" />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <CustomLink to="question-answer">
                    <CategoryPaper icon="sports_esports" title="Games" />
                </CustomLink>
                <CustomLink to="weather">
                    <CategoryPaper icon="thunderstorm" title="Weather" />
                </CustomLink>
                <CategoryPaper icon="calendar_month" title="Events" />
                <CategoryPaper icon="article" title="Articles" />
                <CategoryPaper icon="currency_exchange" title="Currency" />
            </Stack>
        </Box>
    );
}

PopularCategories.propTypes = {
    sectionSpacing: PropTypes.object
};
