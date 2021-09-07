import {createTheme} from '@polaris/components';

export const [themeClass, vars] = createTheme();

export const [devDocsThemeClass, devDocsVars] = createTheme({
  color: {
    scheme: 'light',
    primary: 'hotpink',
    placeholder2: '#BFCC94',
  },
});
