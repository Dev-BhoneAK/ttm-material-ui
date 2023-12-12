import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useDarkLightTheme from '../../hooks/useDarkLightTheme';

export default function BackgroundGrey({ children, styles }) {
    const { greyBackground } = useDarkLightTheme();
    return (
        <Box
            sx={{
                background: greyBackground,
                p: { xs: 2, sm: 3 },
                ...styles
            }}
        >
            {children}
        </Box>
    );
}

BackgroundGrey.propTypes = {
    children: PropTypes.node,
    styles: PropTypes.object
};
