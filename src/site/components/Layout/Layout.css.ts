import {style, composeStyles} from '@vanilla-extract/css';
import {atoms, vars} from '@polaris/elements';

export const root = composeStyles(
  atoms({
    margin: 'base',
  }),
  style({
    fontFamily: vars.fonts.body,
  }),
);
