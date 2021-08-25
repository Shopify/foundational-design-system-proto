import React from 'react';

import {atoms, Atoms} from '../../atoms';
import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../utilities';

function isAtomsProp(key: string): key is keyof Atoms {
  return atoms.properties.has(key as keyof Omit<Atoms, 'reset'>);
}

interface Props extends Atoms {}

export type BoxProps<T extends React.ElementType> =
  PolymorphicComponentPropsWithRef<T, Props>;

type BoxComponent = (<T extends React.ElementType = 'div'>(
  props: BoxProps<T>,
) => React.ReactElement | null) & {displayName?: string};

export const Box: BoxComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    props: BoxProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const {as: Component = 'div', className = '', ...restProps} = props;

    const atomProps: {[key: string]: unknown} = {};
    const nativeProps: {[key: string]: unknown} = {};

    for (const key in restProps) {
      if (isAtomsProp(key)) {
        atomProps[key] = restProps[key as keyof typeof restProps];
      } else {
        nativeProps[key] = restProps[key as keyof typeof restProps];
      }
    }

    const atomicClasses = atoms(atomProps);

    return (
      <Component
        ref={ref}
        className={`${atomicClasses} ${className}`}
        {...nativeProps}
      />
    );
  },
);

Box.displayName = 'Box';
