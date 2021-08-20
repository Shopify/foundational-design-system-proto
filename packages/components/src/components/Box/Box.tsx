import React, {forwardRef, AllHTMLAttributes, ElementType} from 'react';

import classNames from '../../utilities/classNames';
import {atoms, Atoms, isAtomsKey} from '../../atoms';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'height' | 'width' | 'color' | 'cursor'
    >,
    Atoms {
  component?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>((props: BoxProps, ref) => {
  const {component: Component = 'div', className, ...restProps} = props;

  const atomProps: {[key: string]: unknown} = {};
  const nativeProps: {[key: string]: unknown} = {};

  for (const key in restProps) {
    if (isAtomsKey(key)) {
      atomProps[key] = props[key];
    } else {
      nativeProps[key] = props[key as keyof BoxProps];
    }
  }

  const atomicClasses = atoms(atomProps);

  return (
    <Component
      ref={ref}
      className={classNames(atomicClasses, className)}
      {...nativeProps}
    />
  );
});

Box.displayName = 'Box';
