import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import SlidingAppBar from './SlidingAppBar';

// function HideOnScroll(props) {
//   const { children, window, showAppBar } = props;
//   const [scrollTrigger, setScrollTrigger] = React.useState();
//   React.useEffect(() => {
//     function changeTrigger() {
//       const trigger = useScrollTrigger({
//         target: window ? window() : undefined,
//       });
//       setScrollTrigger(trigger);
//     }
//     changeTrigger();
//   }, []);
//   console.log("trigger ", !scrollTrigger);
//   console.log("showAppBar ", !showAppBar);
//   return (
//     <Slide appear={false} direction="down" in={!scrollTrigger || !showAppBar}>
//       {/* <Slide appear={false} direction="down" in={showAppBar}> */}
//       {children}
//     </Slide>
//   );
// }

export default function DetailAppBar(props) {
    return (
        <>
            <CssBaseline />
            <SlidingAppBar {...props}>
                <AppBar
                    sx={{
                        mb: { xs: 2, sm: 3 },
                        position: 'static',
                        boxShadow: 'none',
                        ...props.styles
                    }}
                >
                    <Toolbar>
                        <Link to="/" style={{ color: 'inherit' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="back-to-home"
                                color="inherit"
                                sx={{ pr: { xs: 0, sm: 1.5 } }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {props.headingTitle}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </SlidingAppBar>
        </>
    );
}

DetailAppBar.propTypes = {
    styles: PropTypes.object,
    headingTitle: PropTypes.string
};
