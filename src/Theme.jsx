import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5B532C', // Customize primary color
        },
        secondary: {
            main: '#ff4081', // Customize secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6: {
            fontFamily: 'Fleur De Leah, cursive',
            fontWeight: 200,
            fontSize: '3rem',
        },
        
    },
});

export default theme;