import type {AnyRef} from './types';

export function setRef<T>(ref: AnyRef<T>, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
