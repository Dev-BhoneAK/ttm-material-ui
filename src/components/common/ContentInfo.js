import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import UserActionMenu from './UserActionMenu';
import CustomIcon from './CustomIcon';
import CustomTypo from './CustomTypo';

export default function ContentInfo({ publishedDate, viewCount }) {
    const iconStyles = {
        marginRight: { xs: '0.1rem', md: '0.2rem' }
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ px: { xs: 2 }, py: { xs: 2 } }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <CustomIcon icon="calendar_month" styles={iconStyles} />
                <CustomTypo variant="subtitle1" title={publishedDate} />
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <CustomIcon icon="visibility" styles={iconStyles} />
                <CustomTypo variant="subtitle1" title={viewCount} />
            </Stack>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <CustomIcon icon="more_horiz" />
            </IconButton>
            <UserActionMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
            {/* <IconButton
        size="large"
        edge="end"
        aria-label="back-to-home"
        color="inherit"
        sx={{ pr: { xs: 0, sm: 1.5 } }}
      >
        <CustomIcon icon="more_horiz" />
      </IconButton> */}
        </Stack>
    );
}

ContentInfo.propTypes = {
    publishedDate: PropTypes.string,
    viewCount: PropTypes.string
};
