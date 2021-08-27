import {sprinkles, Sprinkles} from './sprinkles.css';

function isAtomsProp(key: string): key is keyof Sprinkles {
  return sprinkles.properties.has(key as keyof Sprinkles);
}

export function splitProps<T extends {[key: string]: any}>(props: T) {
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
