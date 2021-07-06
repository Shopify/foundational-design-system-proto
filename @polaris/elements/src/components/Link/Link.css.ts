import {style, styleVariants} from '@vanilla-extract/css';
import {tokens} from '@polaris/tokens';

export const linkStyle = style({
  color: tokens.colors.interactive,
  textDecoration: 'underline',
  cursor: 'pointer',

  ':hover': {
    color: tokens.colors.hover,
  },

  ':active': {
    color: tokens.colors.pressed,
  },
});

export const variant = styleVariants({
  nounderline: {
    textDecoration: 'none',
  },
});
