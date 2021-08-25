import React from 'react';

export type AnyRef<T> =
  | React.MutableRefObject<T | null>
  | React.RefCallback<T>
  | null;
