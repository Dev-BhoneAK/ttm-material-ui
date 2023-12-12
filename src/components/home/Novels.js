import React from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box } from '@mui/material';

import CustomLink from '../common/CustomLink';
import SectionTitle from '../common/SectionTitle';
import ImageMediaCard from '../common/meida-cards/ImageMediaCard';

export default function Novels({ novels, sectionSpacing }) {
    const settings = {
        className: 'slider variable-width',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <Box sx={{ ...sectionSpacing }}>
            <SectionTitle icon="menu_book" title="Novels" />
            <Slider {...settings}>
                {novels.map((novel) => (
                    <CustomLink to={`/novels/${novel?.id}`} key={novel.id}>
                        <ImageMediaCard margin="true" data={novel} />
                    </CustomLink>
                ))}
            </Slider>
        </Box>
    );
}

Novels.propTypes = {
    novels: PropTypes.array,
    sectionSpacing: PropTypes.object
};
