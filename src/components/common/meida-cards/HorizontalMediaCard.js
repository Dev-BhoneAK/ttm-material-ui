import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { textOverflowEllipsis } from '../../../utils/commonStyle';
import useUpperTabletSize from '../../../hooks/useUpperTabletSize';

export default function HorizontalMediaCard({ data, margin, width }) {
    const theme = useTheme();
    const upperTabletSize = useUpperTabletSize();
    return (
        <Card
            sx={{
                mr: margin && 1.5,
                width: width,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                background: theme.palette.cardBackground
            }}
        >
            <CardMedia
                component="img"
                sx={{ width: upperTabletSize ? '120px' : '100px', mr: '8px' }}
                image={`${process.env.REACT_APP_API_DOMAIN}/assets${data?.image}`}
                alt={data?.title}
            />
            <CardContent sx={{ '&:last-child': { p: 0 } }}>
                <Typography sx={{ ...textOverflowEllipsis }} variant="body1">
                    {data?.title}
                </Typography>
            </CardContent>
        </Card>
    );
}

HorizontalMediaCard.propTypes = {
    data: PropTypes.object,
    margin: PropTypes.bool,
    width: PropTypes.string
};
