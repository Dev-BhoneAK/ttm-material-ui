import { useState, useEffect } from 'react';

// Custom hook for managing dark mode and local storage
const useDarkMode = () => {
    // Read initial mode from local storage or default to 'light'
    const storedMode = localStorage.getItem('darkMode');
    const initialMode = storedMode ? JSON.parse(storedMode) : 'light';

    // State to track the current mode
    const [mode, setMode] = useState(initialMode);

    // Toggle function to switch between 'light' and 'dark' modes
    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    // useEffect to apply the dark mode when the component mounts
    useEffect(() => {
        const body = document.body;
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(`${mode}-mode`);
    }, [mode]);

    return [mode, toggleMode];
};

export default useDarkMode;
