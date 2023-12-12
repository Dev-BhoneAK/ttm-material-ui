import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedIcon from '@mui/icons-material/Feed';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import { Link, useLocation } from 'react-router-dom';

export default function BottomNavigationBar() {
    const location = useLocation();

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels value={location.pathname}>
                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon />}
                    component={Link}
                    to="/"
                    value="/"
                />
                <BottomNavigationAction
                    label="News"
                    icon={<FeedIcon />}
                    component={Link}
                    to="/news"
                    value="/news"
                />
                <BottomNavigationAction
                    label="Novels"
                    icon={<MenuBookIcon />}
                    component={Link}
                    to="/novels"
                    value="/novels"
                />
                <BottomNavigationAction
                    label="Videos"
                    icon={<LiveTvIcon />}
                    component={Link}
                    to="/videos"
                    value="/videos"
                />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            </BottomNavigation>
        </Paper>
    );
}
