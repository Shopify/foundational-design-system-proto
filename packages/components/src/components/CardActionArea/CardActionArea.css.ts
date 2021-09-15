import {style, styleVariants} from '@vanilla-extract/css';

// import {defaultVars} from '../../theme/vars.css';

export const root = style({
  display: 'block',
  width: '100%',
  ':focus': {
    boxShadow: '0 1px 0 rgb(0 0 0 / 50%), 0 -1px 0 rgb(0 0 0 / 20%)',
  },
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, .35)',
    boxShadow: '0 1px 0 rgb(0 0 0 / 50%), 0 -1px 0 rgb(0 0 0 / 20%)',
  },
});

export const cover = style({
  inset: '0px',
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
