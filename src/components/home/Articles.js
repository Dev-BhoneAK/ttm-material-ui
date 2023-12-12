import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ArticleIcon from '@mui/icons-material/Article';
import MediaCard from '../common/MediaCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Articles() {
    const settings = {
        className: 'slider variable-width',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    };
    return (
        <>
            <SectionTitle icon={<ArticleIcon />} title="Articles" />
            <Slider {...settings}>
                <MediaCard type="horizontal" margin="true" />
                <MediaCard type="horizontal" margin="true" />
                <MediaCard type="horizontal" margin="true" />
            </Slider>
        </>
    );
}
