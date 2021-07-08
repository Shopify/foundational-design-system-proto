import tokens from '@polaris/tokens';

import baseTokens from '../docs/tokens';

export const fonts = {
  body: tokens.fonts.monospace,
  code: tokens.fonts.system,
};

const adminTokens = {
  ...baseTokens,
  fonts,
};

export default adminTokens;
