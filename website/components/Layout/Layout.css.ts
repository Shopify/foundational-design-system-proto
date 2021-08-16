import {style, composeStyles} from '@vanilla-extract/css';
import {atoms} from '@polaris/atoms';
import {vars} from '@polaris/themes';

export const root = composeStyles(
  atoms({
    marginY: 4,
  }),
  style({
    fontFamily: vars.fonts.system,
  }),
);
