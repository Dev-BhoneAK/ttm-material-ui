import { useTheme } from '@mui/material/styles';

export default function useDarkLightTheme() {
    const theme = useTheme();
    const greyBackground = theme.palette.mode === 'dark' ? '#1e1e1e' : '#e1e1e1';
    const blueBox = theme.palette.mode === 'dark' ? '#272727' : '#1876d1';
    const whiteBox = theme.palette.mode === 'dark' ? '#121212' : '#ffffff';
    const textColor = theme.palette.mode === 'dark' ? '#ffffff' : '#121212';
    return { greyBackground, blueBox, whiteBox, textColor };
}
