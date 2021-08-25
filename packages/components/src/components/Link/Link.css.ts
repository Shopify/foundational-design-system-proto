import {style, styleVariants} from '@vanilla-extract/css';
// import {defaultVars} from '../../theme';

//Need a variation for having an external link icon?

export const root = style({
  // default unvisited color
  //   color: defaultVars.color.placeholder1,
  textDecoration: 'underline',
  cursor: 'pointer',

  //   ':visited': {
  //     // default hover color
  //     color: defaultVars.color.placeholder2,
  //   },

  //   ':hover': {
  //     // default hover color
  //     color: defaultVars.color.placeholder2,
  //   },

  //   ':active': {
  //     color: defaultVars.color.placeholder2,
  //   },
});

export const variant = styleVariants({
  noUnderline: {
    textDecoration: 'none',
  },
});
