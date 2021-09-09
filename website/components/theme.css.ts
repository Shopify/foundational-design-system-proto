import {createTheme} from '@polaris/components';

export const [defaultThemeClass, defaultVars] = createTheme();

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
});
