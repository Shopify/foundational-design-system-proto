import {style, composeStyles} from '@vanilla-extract/css';
import {atoms, vars} from '@polaris/components';

export const root = composeStyles(
  atoms({
    marginY: 4,
  }),
  style({
    fontFamily: vars.fonts.system,
  }),
);
