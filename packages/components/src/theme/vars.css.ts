import {createTheme, createThemeContract} from '@vanilla-extract/css';
import * as tokens from '@polaris/tokens';

const theme = {
  breakpoints: tokens.breakpoints,
  spacing: tokens.spacing,
};

export const vars = createThemeContract(theme);
export const themeClass = createTheme(vars, theme);
