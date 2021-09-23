import {createTheme} from '@polaris/components';

export const [themeClass, vars] = createTheme();

export const [devDocsThemeClass, devDocsVars] = createTheme({
  color: {
    scheme: 'light',
    primary: 'hotpink',
    placeholder2: '#BFCC94',
    grey0: '#ffffff',
    grey01: '#fafbfb',
    grey02: '#f6f6f7',
    grey03: '#f1f2f3',
    grey06: '#d2d5d8',
    grey10: '#8c9196',
    grey11: '#6d7175',
    grey12: '#5c5f62',
  },
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  typography: {
    fontsize: {
      'heading-1': '2.25rem',
      'heading-2': '2rem',
      'heading-3': '1.75rem',
      'heading-4': '1.5rem',
      'heading-5': '1.25rem',
      'heading-6': '1rem',
      'heading-7': '.75rem',
      'body-large': '1.25rem',
      body: '1rem',
      'body-small': '.875rem',
      caption: '.875rem',
    },
  },
});
