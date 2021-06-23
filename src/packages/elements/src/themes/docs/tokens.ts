import tokens from '@polaris/tokens';

const fonts = {
  body: tokens.fonts.system,
  code: tokens.fonts.monospace,
};

const fontWeights = {
  ...tokens.fontWeights,
};

const spacing = {
  ...tokens.spacing,
  none: '0px',
  extraTight: tokens.spacing[1],
  tight: tokens.spacing[2],
  baseTight: tokens.spacing[3],
  base: tokens.spacing[4],
  loose: tokens.spacing[5],
  extraLoose: tokens.spacing[6],
};

const docsTokens = {
  fonts,
  fontWeights,
  spacing,
};

export default docsTokens;
