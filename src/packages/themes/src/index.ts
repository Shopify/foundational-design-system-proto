import base from './themes/base';

// Themes
export {default as admin} from './themes/admin';
export const theme = base;
export default theme;

// Variables and atomic styles
export * from './atoms';
export * from './vars';

// Utilities
export {createTheme} from './utils/createTheme';
