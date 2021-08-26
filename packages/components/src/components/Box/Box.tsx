import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {atoms, Atoms, getAtomProps} from '../../atoms';

interface Props extends Atoms {}

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div', Props>;

export type BoxProps = Polymorphic.OwnProps<PolymorphicBox>;

export const Box = React.forwardRef((props, ref) => {
  const {as: Component = 'div', className = '', ...restProps} = props;

  const {atomProps, nativeProps} = getAtomProps(restProps);

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
