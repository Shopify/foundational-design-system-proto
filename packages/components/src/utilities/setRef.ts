import type {AnyRef} from './types';

/**
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui-org/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 *
 * Derived from Material-UI: https://github.com/mui-org/material-ui/blob/c7a37397e78abb754280552429b43e07af156122/packages/material-ui-utils/src/setRef.ts#L16
 */
export function setRef<T>(ref: AnyRef<T>, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
