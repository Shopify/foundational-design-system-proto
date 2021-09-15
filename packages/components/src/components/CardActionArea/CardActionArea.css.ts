import {style, styleVariants} from '@vanilla-extract/css';

// import {defaultVars} from '../../theme/vars.css';

export const root = style({
  inset: '0px',
  width: '100%',
  position: 'absolute',
  zIndex: 0,
  ':focus': {
    boxShadow: '0 1px 0 rgb(0 0 0 / 50%), 0 -1px 0 rgb(0 0 0 / 20%)',
  },
});

export const variants = styleVariants({
  //   default: {
  //     textDecoration: 'underline',
  //     ':hover': {
  //       textDecoration: 'none',
  //     },
  //   },
});
