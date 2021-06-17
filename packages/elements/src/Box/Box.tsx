import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';
import classnames from 'classnames';

import {atoms, Atoms} from '../styles/sprinkles.css';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'
    >,
    Atoms {
  component?: ElementType;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({component = 'div', className, margin, ...restProps}, ref) => {
    const atomClasses = classnames(atoms({margin}), className);
    return createElement(component, {
      className: atomClasses,
      ...restProps,
      ref,
    });
  },
);
