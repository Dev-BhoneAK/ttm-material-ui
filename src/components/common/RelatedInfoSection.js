import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import SectionTitle from './SectionTitle';
import BackgroundGrey from './BackgroundGrey';

export default function RelatedInfoSection({ title, renderedData }) {
    return (
        <BackgroundGrey>
            <SectionTitle title={`Related ${title}`} />
            <Grid container spacing={2}>
                {renderedData}
            </Grid>
        </BackgroundGrey>
    );
}

RelatedInfoSection.propTypes = {
    title: PropTypes.string,
    renderedData: PropTypes.node
};
