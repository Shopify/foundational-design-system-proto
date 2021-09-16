import {style, styleVariants} from '@vanilla-extract/css';

// import {defaultVars} from '../../theme/vars.css';

export const root = style({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
});

export const variant = styleVariants({
  //   default: {
  //     textDecoration: 'underline',
  //     ':hover': {
  //       textDecoration: 'none',
  //     },
  //   },
});
