import {atoms, Atoms} from './atoms.css';

function isAtomsProp(key: string): key is keyof Atoms {
  return atoms.properties.has(key as keyof Omit<Atoms, 'reset'>);
}

export function getAtomProps<T extends {[key: string]: any}>(props: T) {
  const atomProps: {[key: string]: unknown} = {};
  const nativeProps: {[key: string]: unknown} = {};

  for (const key in props) {
    if (isAtomsProp(key)) {
      atomProps[key] = props[key as keyof typeof props];
    } else {
      nativeProps[key] = props[key as keyof typeof props];
    }
  }

  return {
    atomProps,
    nativeProps,
  };
}
