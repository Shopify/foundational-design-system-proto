import {createTheme} from '@vanilla-extract/css';
import {theme, vars} from '@polaris/elements';

// Using the default theme, but we could apply overrides here
export const themeClass = createTheme(vars, theme);
