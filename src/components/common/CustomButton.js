import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { grey, purple } from '@mui/material/colors';
import useUpperTabletSize from '../../hooks/useUpperTabletSize';

const CustomizedButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.cardBackground,
    color: theme.palette.mode === 'dark' ? '#fff' : grey[800],
    '&:hover': {
        backgroundColor: grey[500],
        borderColor: '#0062cc'
    },
    '&:active': {
        backgroundColor: grey[700],
        borderColor: grey[800]
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem grey[900]'
    }
}));

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: purple[500],
//   "&:hover": {
//     backgroundColor: purple[700],
//   },
// }));

//

export default function CustomButton() {
    const upperTabletSize = useUpperTabletSize();
    return (
        <CustomizedButton
            variant="contained"
            fullWidth={upperTabletSize ? false : true}
            endIcon={<NavigateNextIcon />}
            disableRipple
        >
            View More
        </CustomizedButton>
    );
}
