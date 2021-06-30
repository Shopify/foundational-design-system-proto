import tokens from '@polaris/tokens';

import baseTokens from '../docs/tokens';

export const fonts = {
  body: tokens.fonts.system,
  code: tokens.fonts.monospace,
};

const adminTokens = {
  ...baseTokens,
  fonts,
};

export default adminTokens;
