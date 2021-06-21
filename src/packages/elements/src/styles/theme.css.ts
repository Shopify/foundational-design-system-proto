import tokens from '@polaris/tokens';
import {createGlobalTheme} from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  spacing: {
    small: '4px',
    medium: '16px',
    large: '24px',
  },
  font: {
    body: tokens.fonts['sans-serif'],
  },
});
