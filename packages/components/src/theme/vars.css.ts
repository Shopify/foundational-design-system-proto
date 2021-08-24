import {createThemeContract} from '@vanilla-extract/css';

import {defaultTheme} from './index';

export const defaultVars = createThemeContract(defaultTheme);
