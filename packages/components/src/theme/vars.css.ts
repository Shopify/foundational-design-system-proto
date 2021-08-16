import {createTheme, createThemeContract} from '@vanilla-extract/css';
import * as tokens from '@polaris/tokens';

const theme = {
  spacing: tokens.spacing,
};

export const vars = createThemeContract(theme);
export const themeClass = createTheme(vars, theme);
