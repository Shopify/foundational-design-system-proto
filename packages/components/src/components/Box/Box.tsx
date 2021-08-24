import React, {forwardRef, AllHTMLAttributes, ElementType} from 'react';

import {atoms, Atoms} from '../../atoms';

function isAtomsProp(key: string): key is keyof Atoms {
  return atoms.properties.has(key as keyof Omit<Atoms, 'reset'>);
}

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'height' | 'width' | 'color' | 'cursor'
    >,
    Atoms {
  component?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({component: Component = 'div', className = '', ...props}: BoxProps, ref) => {
    const atomProps: {[key: string]: unknown} = {};
    const nativeProps: {[key: string]: unknown} = {};

    for (const key in props) {
      if (isAtomsProp(key)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
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
