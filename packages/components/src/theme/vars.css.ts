import {createTheme, createThemeContract} from '@vanilla-extract/css';
import * as tokens from '@polaris/tokens';

export const vars = createThemeContract(tokens);
export const themeClass = createTheme(vars, tokens);
