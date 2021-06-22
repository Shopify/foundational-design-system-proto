import tokens from '@polaris/tokens';

import {createTheme} from '../utils';

export const fonts = {
  body: 'Helvetica',
  code: tokens.fonts.monospace,
};

const theme = {
  fonts,
};

export default createTheme('admin', theme);
