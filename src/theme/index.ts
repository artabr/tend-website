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
    // Section titles - 38px on desktop
    h2: {
      fontSize: '1.25rem', // 20px mobile
      fontWeight: 600,
      lineHeight: '64px',
      color: '#333333',
      '@media (min-width:900px)': {
        fontSize: '38px', // 38px desktop
      },
    },
    // Feature titles - 28px on desktop
    h3: {
      fontSize: '1.125rem', // 18px mobile
      fontWeight: 600,
      lineHeight: '42px',
      color: '#000000',
      '@media (min-width:900px)': {
        fontSize: '28px', // 28px desktop
      },
    },
    // Block titles - 28px
    h4: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '42px',
      color: '#000000',
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
      50: '#fce4f3',
      100: '#f8bce0',
      200: '#f38fcc',
      300: '#ee62b8',
      400: '#e940a8',
      500: '#c91d8f',
      600: '#a71677',
      700: '#8a1262',
      800: '#6e0e4e',
      900: '#520a3a',
      main: '#a71677',
      light: '#c91d8f',
      dark: '#8a1262',
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
