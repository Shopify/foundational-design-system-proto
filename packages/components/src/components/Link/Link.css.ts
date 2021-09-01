import {style, styleVariants} from '@vanilla-extract/css';

export const root = style({
  ':hover': {
    textDecoration: 'none',
  },
});

export const underline = styleVariants({
  none: {
    textDecoration: 'none',
  },
  always: {
    ':hover': {
      textDecoration: 'underline',
    },
  },
});
