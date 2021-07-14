import {style, styleVariants} from '@vanilla-extract/css';
import {colors} from '@polaris/tokens';

export const linkStyle = style({
  color: colors.interactive,
  textDecoration: 'underline',
  cursor: 'pointer',

  ':hover': {
    color: colors.hover,
  },

  ':active': {
    color: colors.pressed,
  },
});

export const variant = styleVariants({
  nounderline: {
    textDecoration: 'none',
  },
});
