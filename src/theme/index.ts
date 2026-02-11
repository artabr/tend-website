'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    slate: {
      850: string;
    };
  }
  interface PaletteOptions {
    slate?: {
      850?: string;
    };
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    // Hero headline - 56px on desktop (matching tend-app.pro)
    h1: {
      fontSize: '1.5rem', // 24px mobile
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (min-width:900px)': {
        fontSize: '3.5rem', // 56px desktop
      },
    },
    // Section titles - 24px on desktop
    h2: {
      fontSize: '1.25rem', // 20px mobile
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (min-width:900px)': {
        fontSize: '1.5rem', // 24px desktop
      },
    },
    // Feature titles - 20px on desktop
    h3: {
      fontSize: '1.125rem', // 18px mobile
      fontWeight: 700,
      lineHeight: 1.4,
      '@media (min-width:900px)': {
        fontSize: '1.25rem', // 20px desktop
      },
    },
    // Block titles - 16px
    h4: {
      fontSize: '1rem', // 16px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    // Subheadline - 18px on desktop
    subtitle1: {
      fontSize: '1rem', // 16px mobile
      fontWeight: 400,
      lineHeight: 1.55,
      '@media (min-width:900px)': {
        fontSize: '1.125rem', // 18px desktop
      },
    },
    // Body text - 14px
    body1: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.55,
    },
    // Small body text - 16px
    body2: {
      fontSize: '1rem', // 16px
      fontWeight: 600,
      lineHeight: 1.55,
      letterSpacing: '0.24px',
    },
    // Caption/disclaimer - 12px
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    // Button text
    button: {
      fontSize: '1rem', // 16px
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      50: '#e8f7fc',
      100: '#c5ebf7',
      200: '#9edcf1',
      300: '#77cdeb',
      400: '#5fc3e7',
      500: '#47b9e3',
      600: '#3fa8cf',
      700: '#3592b5',
      800: '#2c7c9b',
      900: '#1f5a70',
      main: '#47b9e3',
      light: '#5fc3e7',
      dark: '#3592b5',
      contrastText: '#fff',
    },
    slate: {
      850: 'hsl(222deg 47% 16%)',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          backgroundColor: '#ffffff',
          color: '#212121',
        },
      },
    },
  },
});
