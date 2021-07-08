import {style, composeStyles} from '@vanilla-extract/css';
import {atoms, vars} from '@polaris/components';

export const root = composeStyles(
  atoms({
    margin: '4',
  }),
  style({
    fontFamily: vars.fonts.body,
  }),
);
