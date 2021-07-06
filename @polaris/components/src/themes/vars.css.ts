import {createThemeContract} from '@vanilla-extract/css';

import tokens from './docs/tokens';

export const vars = createThemeContract(tokens);
