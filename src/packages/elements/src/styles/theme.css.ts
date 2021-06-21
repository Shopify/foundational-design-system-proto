import tokens from '@polaris/tokens';
import {createGlobalTheme} from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  font: {
    body: tokens.fonts['sans-serif'],
  },
});
