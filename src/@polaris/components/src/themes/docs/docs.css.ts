import {createTheme} from '@vanilla-extract/css';

import {vars} from '../vars.css';

import tokens from './tokens';

export const themeClass = createTheme(vars, tokens);
