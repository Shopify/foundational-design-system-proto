import base from '../themes/base';

export function createTheme(
  themeName: string,
  themeObject: {[key: string]: string | number},
) {
  return {...base, ...themeObject};
}
