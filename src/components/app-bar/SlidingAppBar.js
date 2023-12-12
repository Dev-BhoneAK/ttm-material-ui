import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Slide } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { getHomeData } from '../../utils/api';

export default function SlidingAppBar({ children, window, showAppBar }) {
    //   const [scrollTrigger, setScrollTrigger] = useState(false);
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });
    //   useEffect(() => {
    //     function changeTrigger() {
    //       const trigger = useScrollTrigger({
    //         target: window ? window() : undefined,
    //       });
    //       setScrollTrigger(trigger);
    //     }
    //     changeTrigger();
    //   }, []);
    //   useEffect(() => {
    //     setScrollTrigger(trigger);
    //   }, [trigger]);
    console.log('trigger ', trigger);
    console.log('showAppBar ', showAppBar);
    console.log('!trigger ', !trigger);
    console.log('!showAppBar ', !showAppBar);
    let finalResult = true; // trigger က အောက်ကို ဆင်းတဲ့အချိန်မှာ true
    if (trigger) {
        finalResult = false;
    }
    if (!showAppBar) {
        finalResult = false;
    }
    return (
        <Slide appear={false} direction="down" in={finalResult}>
            {/* <Slide appear={false} direction="down" in={!scrollTrigger || !showAppBar}> */}
            {/* <Slide appear={false} direction="down" in={showAppBar}> */}
            {children}
        </Slide>
    );
}

SlidingAppBar.propTypes = {
    children: PropTypes.node,
    window: PropTypes.func,
    showAppBar: PropTypes.bool
};
