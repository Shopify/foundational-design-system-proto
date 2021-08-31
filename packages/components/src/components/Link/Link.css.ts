import {style, styleVariants} from '@vanilla-extract/css';
// import {defaultVars} from '../../theme';

//How will theming work for color?

export const root = style({
  cursor: 'pointer',
  // default theme unvisited color??
  //   color: defaultVars.color.placeholder1,
  textDecoration: 'underline',
  ':active': {
    // default theme active color
    // color: defaultVars.color.placeholder2,
  },
  ':hover': {
    // default theme hover color
    // color: defaultVars.color.placeholder2,
    textDecoration: 'none',
  },
  ':visited': {
    // default theme visited color
    // color: defaultVars.color.placeholder2,
  },
});

export const variant = styleVariants({
  underlineNone: {
    textDecoration: 'none',
    //   ':hover': {
    //     textDecoration: 'none',
    //   },
  },
  underlineAlways: {
    ':hover': {
      textDecoration: 'underline',
    },
  },
});
