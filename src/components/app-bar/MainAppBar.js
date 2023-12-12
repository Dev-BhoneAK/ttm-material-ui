import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import CloudIcon from '@mui/icons-material/Cloud';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../../context/ColorModeContext';
import HeadingTitle from '../common/HeadingTitle';

import useLocalStorage from '../../hooks/useLocalStorage';
import useDarkMode from '../../hooks/useDarkMode';

export default function MainAppBar({ sectionSpacing }) {
    const [storedValue, setValue] = useLocalStorage('theme', 'light');
    const [mode, toggleMode] = useDarkMode();

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [query, setQuery] = React.useState('');

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // const handleSearchInput = (e) => {
    //   setQuery(e.target.value);
    //   if (e.target.value === "") {
    //     setComponentLists(componentListData);
    //   } else {
    //     setComponentLists(
    //       componentLists.filter((component) => {
    //         return component.name
    //           .toLowerCase()
    //           .includes(e.target.value.toLowerCase());
    //       })
    //     );
    //   }
    // const results = posts.filter((post) => {
    //   if (e.target.value === "") return posts;
    //   return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    // });
    // setstate({
    //   query: e.target.value,
    //   list: results,
    // });
    // };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <Box sx={{ flexGrow: 1, ...sectionSpacing }}>
            <AppBar position="static" sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <Stack alignItems="center">
                        <CloudIcon sx={{ fontSize: '28px' }} />
                        <Typography variant="caption" component="div">
                            26˚C - 35˚C
                        </Typography>
                    </Stack>
                    <HeadingTitle title="BAK" />
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            sx={{ p: 1 }}
                            size="large"
                            onClick={colorMode.toggleColorMode}
                            color="inherit"
                        >
                            {theme.palette.mode === 'dark' ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                        <IconButton
                            sx={{ p: 1 }}
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={() =>
                                setValue((prevMode) => (prevMode == 'light' ? 'dark' : 'light'))
                            }
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu}
      {renderMenu} */}
        </Box>
    );
}

MainAppBar.propTypes = {
    sectionSpacing: PropTypes.object
};
