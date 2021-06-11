import {style, styleVariants} from '@vanilla-extract/css';
import {vars} from '@polaris/themes';

export const linkStyle = style({
  fontFamily: vars.font.system,
  color: vars.color.interactive,
});

export const variant = styleVariants({
  underline: {
    textDecoration: 'underline',
  },
});
