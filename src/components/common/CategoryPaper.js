import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import CustomIcon from '../common/CustomIcon';
import CustomTypo from '../common/CustomTypo';

export default function CategoryPaper({ name, icon, title }) {
    const theme = useTheme();
    return (
        <Stack
            spacing={1}
            alignItems="center"
            sx={{ marginRight: name === 'news' && { xs: 3, md: 5 } }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: { xs: 50, md: 80 },
                    height: { xs: 50, md: 80 },
                    background: theme.palette.cardBackground,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <CustomIcon
                    icon={icon}
                    // styles={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                />
            </Paper>
            {/*<Typography*/}
            {/*  color={props.index && props.index === props.activeSlide && "blue"}*/}
            {/*>*/}
            {/*  {props.title}*/}
            {/*</Typography>*/}
            <CustomTypo title={title} variant="body1" />
        </Stack>
    );
}

CategoryPaper.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string
};
