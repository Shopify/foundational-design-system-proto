import React, {forwardRef, AllHTMLAttributes, ElementType} from 'react';

import classNames, {ClassValue} from '../../utilities/classNames';
import {atoms, Atoms} from '../../atoms';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'height' | 'width' | 'color' | 'cursor' | 'className'
    >,
    Atoms {
  component?: ElementType;
  className?: ClassValue;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({component: Component = 'div', className, ...props}: BoxProps, ref) => {
    const atomProps: {[key: string]: unknown} = {};
    const nativeProps: {[key: string]: unknown} = {};

    for (const key in props) {
      if (atoms.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const userClasses = classNames(className);
    const atomicClasses = atoms(atomProps);

    return (
      <Component
        ref={ref}
        className={`${atomicClasses}${userClasses ? ` ${userClasses}` : ''}`}
        {...nativeProps}
      />
    );
  },
);

Box.displayName = 'Box';
