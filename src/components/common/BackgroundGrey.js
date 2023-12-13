import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useDarkLightTheme from '../../hooks/useDarkLightTheme';

export default function BackgroundGrey({ children, styles }) {
    const theme = useTheme();
    // const { greyBackground } = useDarkLightTheme();
    return (
        <Box
            sx={{
                background: theme.palette.sectionBackground,
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
