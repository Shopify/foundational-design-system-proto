import tokens from '@polaris/tokens';

import {vars} from '../vars';

export const fonts = {
  body: tokens.fonts.system,
  code: tokens.fonts.monospace,
};

export const spacing = {
  ...tokens.spacing,
  none: '0px',
  extraTight: vars.spacing[1],
  tight: vars.spacing[2],
  baseTight: vars.spacing[3],
  base: vars.spacing[4],
  loose: vars.spacing[5],
  extraLoose: vars.spacing[6],
};

const theme = {
  fonts,
  spacing,
};

export default theme;
