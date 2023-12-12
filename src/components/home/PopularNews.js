import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import CustomLink from '../common/CustomLink';
import SectionTitle from '../common/SectionTitle';
import useUpperTabletSize from '../../hooks/useUpperTabletSize';
import HorizontalMediaCard from '../common/meida-cards/HorizontalMediaCard';

export default function PopularNews({ popularNews, sectionSpacing }) {
    const upperTabletSize = useUpperTabletSize();
    const settings = {
        className: 'slider variable-width',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    };
    return (
        <Box sx={{ ...sectionSpacing }}>
            <SectionTitle icon="trending_up" title="Popular News" />
            <Slider {...settings}>
                {popularNews.map((popularNew) => (
                    <CustomLink to={`/news/${popularNew?.id}`} key={popularNew.id}>
                        <HorizontalMediaCard
                            margin={true}
                            data={popularNew}
                            width={upperTabletSize ? '380px' : '280px'}
                        />
                    </CustomLink>
                ))}
            </Slider>
        </Box>
    );
}

PopularNews.propTypes = {
    popularNews: PropTypes.array,
    sectionSpacing: PropTypes.object
};
