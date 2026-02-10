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
