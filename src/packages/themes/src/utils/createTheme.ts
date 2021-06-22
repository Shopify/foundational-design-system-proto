import base from '../themes/base';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export function createTheme(
  themeName: string,
  theme: DeepPartial<typeof base>,
) {
  return {...base, ...theme};
}
