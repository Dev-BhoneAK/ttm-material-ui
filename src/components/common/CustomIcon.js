import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';

export default function CustomIcon({ styles, icon }) {
    return (
        <Icon
            sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                ...styles
            }}
        >
            {icon}
        </Icon>
    );
}

CustomIcon.propTypes = {
    styles: PropTypes.object,
    icon: PropTypes.string
};
