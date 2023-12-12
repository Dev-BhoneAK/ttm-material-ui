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

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode
            }
        });
    }, [mode]);

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
