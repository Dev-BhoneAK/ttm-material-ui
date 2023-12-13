import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ColorModeContext from './context/ColorModeContext';
import { responsiveFontSizes } from '@mui/material/styles';

import useLocalStorage from './hooks/useLocalStorage';

function AppTheme(props) {
    //   const [mode, setMode] = useState("light");
    const [mode, setMode] = useState(() => {
        try {
            // Attempt to get the stored value from local storage
            const item = localStorage.getItem('darkMode');
            // Parse the stored JSON or return the initialValue if it doesn't exist
            console.log('item ', item);
            if (item) {
                return JSON.parse(item);
            } else {
                localStorage.setItem('darkMode', JSON.stringify('light'));
                return 'light';
            }
            //   return item ? JSON.parse(item) : "light";
        } catch (error) {
            console.error('Error retrieving data from local storage:', error);
            return 'error';
        }
    });

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                console.log('toogle mode ', mode);
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
                const newMode = mode === 'light' ? 'dark' : 'light';
                // setMode(newMode);
                localStorage.setItem('darkMode', JSON.stringify(newMode));
            }
        }),
        []
    );

    const getDesignTokens = (mode) => ({
        palette: {
            mode,
            // ...{
            //     primary:
            // sectionBackground: mode === 'light' ? '#e1e1e1' : '#121212'
            // }
            ...(mode === 'light'
                ? {
                      // palette values for light mode
                      primary: { main: '#1565c0' }, // only change mui's primary color on light mode
                      //   primaryColor: '#1565c0',
                      cardBackground: '#fff',
                      sectionBackground: '#e1e1e1'
                  }
                : {
                      // palette values for dark mode
                      //   primary: { main: '#fff' },
                      //   primaryColor: '#424242',
                      cardBackground: '#272727',
                      sectionBackground: '#121212'
                  })
        }
    });

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    // const theme = useMemo(() => {
    //     return createTheme({
    //         palette: {
    //             mode
    //         }
    //     });
    // }, [mode]);

    console.log('current mode ', mode);

    theme.typography.body1 = {
        fontSize: '0.87rem',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
        }
    };

    const themeWithResponsiveFont = responsiveFontSizes(theme);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={themeWithResponsiveFont}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

AppTheme.propTypes = {
    children: PropTypes.node
};
export default AppTheme;
