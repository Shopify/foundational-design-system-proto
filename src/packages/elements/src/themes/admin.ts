import tokens from '@polaris/tokens';

import {createTheme} from './utils';

export const fonts = {
  body: tokens.fonts.system,
  code: tokens.fonts.monospace,
};

const theme = {
  fonts,
};

export default createTheme(theme);
