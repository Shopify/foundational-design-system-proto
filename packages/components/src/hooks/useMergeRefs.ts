import React from 'react';

import {assignRef} from '../utilities';
import type {AnyRef} from '../utilities';

/**
 * React hook that merges react refs into a single memoized function
 *
 * @example
 * import React from 'react';
 * import { useMergeRefs } from './hooks';
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
 * });
 *
 * Adapted from: https://github.com/chakra-ui/chakra-ui/blob/a8bfa9f5fdaa840a9035024fc9e434b32244c83f/packages/hooks/src/use-merge-refs.ts#L34
 */
export function useMergeRefs<T>(...refs: AnyRef<T>[]) {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }

    return (node: T) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node);
      });
    };

    // Intentionally disabled as we care about the equality check for each `ref`
    // in the the `refs` array rather than the `refs` array itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
