import {styleVariants} from '@vanilla-extract/css';

export const underline = styleVariants({
  default: {
    textDecoration: 'underline',
    ':hover': {
      textDecoration: 'none',
    },
  },
  always: {
    textDecoration: 'underline',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  none: {
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'none',
    },
  },
});
