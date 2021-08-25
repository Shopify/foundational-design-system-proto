import React from 'react';

import type {AnyRef} from './types';

type Obj<T> =
  | Parameters<typeof React.isValidElement>[0]
  | React.ReactNode
  | {ref?: AnyRef<T>};

export function isValidElementWithRef<T>(
  object: Obj<T>,
): object is React.ReactElement & {ref: AnyRef<T>} {
  const isValidElement = React.isValidElement(object);

  const hasRef = Boolean((object as {ref?: AnyRef<T>})?.ref);

  return isValidElement && hasRef;
}
