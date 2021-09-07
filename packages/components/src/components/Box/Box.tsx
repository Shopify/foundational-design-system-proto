import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {atoms, Atoms, splitProps} from '../../atoms';

interface Props extends Omit<Atoms, 'reset'> {}

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div', Props>;

export type BoxProps = Polymorphic.OwnProps<PolymorphicBox>;

export const Box = React.forwardRef((props, ref) => {
  const {as: Component = 'div', className = '', ...restProps} = props;

  const {atomProps, nativeProps} = splitProps(restProps);

  const atomicClasses = atoms({
    reset: typeof Component === 'string' ? Component : 'div',
    ...atomProps,
  });

  return (
    <Component
      ref={ref}
      className={`${atomicClasses} ${className}`}
      {...nativeProps}
    />
  );
}) as PolymorphicBox;

Box.displayName = 'Box';
