import {style, styleVariants} from '@vanilla-extract/css';

export const linkStyle = style({
  fontFamily: 'sans-serif',
  color: 'rebeccapurple',
});

export const variant = styleVariants({
  underline: {
    textDecoration: 'underline',
  },
});
