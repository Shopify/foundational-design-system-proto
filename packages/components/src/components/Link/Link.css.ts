import {style, styleVariants} from '@vanilla-extract/css';

export const root = style({
  ':hover': {
    textDecoration: 'none',
  },
});

export const variant = styleVariants({
  underlineNone: {
    textDecoration: 'none',
  },
  underlineAlways: {
    ':hover': {
      textDecoration: 'underline',
    },
  },
});
