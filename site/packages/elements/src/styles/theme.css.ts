import {createTheme} from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  spacing: {
    small: '4px',
    medium: '16px',
    large: '24px',
  },
});
