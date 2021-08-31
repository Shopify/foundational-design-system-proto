import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {atoms, Atoms} from '../../atoms';

function isAtomsProp(key: string): key is keyof Atoms {
  return atoms.properties.has(key as keyof Omit<Atoms, 'reset'>);
}

interface Props extends Atoms {}

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div', Props>;

export type BoxProps = Polymorphic.OwnProps<PolymorphicBox>;

export const Box = React.forwardRef((props, ref) => {
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
}) as PolymorphicBox;

Box.displayName = 'Box';
