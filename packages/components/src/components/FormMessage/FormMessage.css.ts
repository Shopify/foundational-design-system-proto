import {style, styleVariants} from '@vanilla-extract/css';

export const formMessage = style({
  fontSize: '0.875rem',
  fontWeight: 400,
});

export const status = styleVariants({
  error: {color: '#9B2C2C'},
  success: {color: '#276749'},
  warning: {color: '#B7791F'},
  info: {color: '#2b6cb0'},
  neutral: {color: '#718096'},
});
