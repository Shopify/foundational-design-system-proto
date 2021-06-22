import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';
import classnames from 'classnames';
import {atoms, Atoms} from '@polaris/themes';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'
    >,
    Atoms {
  component?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      component = 'div',
      className,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      textAlign,
      ...restProps
    }: BoxProps,
    ref,
  ) => {
    const atomClasses = classnames(
      atoms({
        margin,
        marginX,
        marginY,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        textAlign,
      }),
      className,
    );

    return createElement(component, {
      className: atomClasses,
      ...restProps,
      ref,
    });
  },
);
