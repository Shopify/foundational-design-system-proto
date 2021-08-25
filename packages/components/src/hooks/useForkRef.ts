import React from 'react';

import {setRef} from '../utilities';
import type {AnyRef} from '../utilities';

/**
 * Joins refs together and returns a combination of the two as a new ref
 *
 * This will create a new function if the ref props change and are defined.
 * This means react will call the old forkRef with `null` and the new forkRef
 * with the ref. Cleanup naturally emerges from this behavior
 *
 * Derived from: Material-UI and Rooks
 */
export function useForkRef<T>(refA: AnyRef<T>, refB: AnyRef<T>): AnyRef<T> {
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
