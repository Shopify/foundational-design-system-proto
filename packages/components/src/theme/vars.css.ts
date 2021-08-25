import {createTheme, createThemeContract} from '@vanilla-extract/css';

import * as tokens from '../../../tokens/src';

const theme = {
  spacing: tokens.spacing,
};

export const vars = createThemeContract(theme);
export const themeClass = createTheme(vars, theme);
