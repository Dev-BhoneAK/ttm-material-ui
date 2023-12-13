import * as React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import useUpperTabletSize from '../../../hooks/useUpperTabletSize';
import { textOverflowEllipsis } from '../../../utils/commonStyle';

export default function VerticalMediaCard({ data }) {
    const theme = useTheme();
    const upperTabletSize = useUpperTabletSize();
    return (
        <Card sx={{ background: theme.palette.cardBackground }}>
            <CardMedia
                component="img"
                height={upperTabletSize ? '240px' : '200px'}
                image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
                alt={data?.title}
            />
            <CardContent sx={{ '&:last-child': { py: 2 } }}>
                <Typography sx={{ ...textOverflowEllipsis }} variant="body1">
                    {data?.title}
                </Typography>
            </CardContent>
        </Card>
    );
}

VerticalMediaCard.propTypes = {
    data: PropTypes.object
};
