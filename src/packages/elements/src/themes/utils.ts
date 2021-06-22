import base from './base';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export function createTheme(theme: DeepPartial<typeof base>) {
  return {...base, ...theme};
}
