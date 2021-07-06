import tokens from '@polaris/tokens';

const fonts = {
  body: tokens.fonts.system,
  code: tokens.fonts.monospace,
};

const fontWeights = {
  ...tokens.fontWeights,
};

const fontSizes = {
  ...tokens.fontSizes,
};

const spacing = {
  ...tokens.spacing,
  none: '0px',
  half: tokens.spacing[0.5],
  '1': tokens.spacing[1],
  '2': tokens.spacing[2],
  '3': tokens.spacing[3],
  '4x': tokens.spacing[4],
  '5x': tokens.spacing[5],
};

const docsTokens = {
  fonts,
  fontSizes,
  fontWeights,
  spacing,
};

export default docsTokens;
