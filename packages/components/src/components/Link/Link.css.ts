import {styleVariants} from '@vanilla-extract/css';

export const underline = styleVariants({
  none: {
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'none',
    },
  },
  hover: {
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
});
