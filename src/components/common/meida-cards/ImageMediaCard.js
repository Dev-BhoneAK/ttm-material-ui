import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import useUpperTabletSize from '../../../hooks/useUpperTabletSize';

export const ImageOnlyMediaCard = ({ data, styles }) => {
    const upperTabletSize = useUpperTabletSize();
    return (
        <CardMedia
            component="img"
            sx={{
                width: upperTabletSize ? 140 : 120,
                height: upperTabletSize ? 220 : 180,
                boxShadow: '0 3px 10px -2px black',
                borderRadius: '12px',
                ...styles
            }}
            image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
            alt={data?.title}
        />
    );
};

ImageOnlyMediaCard.propTypes = {
    data: PropTypes.object,
    styles: PropTypes.object
};

export default function ImageMediaCard({ data }) {
    return (
        <Stack alignItems="center" sx={{ mr: 6 }}>
            <ImageOnlyMediaCard data={data} styles={{ mb: { xs: 1, sm: 1.5 } }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="body1">{data?.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    by BAK
                </Typography>
            </Box>
        </Stack>
    );
}

ImageMediaCard.propTypes = {
    data: PropTypes.object
};
