import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';
import classnames, {Argument} from 'classnames';

import {atoms, Atoms} from '../../atoms';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      | 'content'
      | 'height'
      | 'translate'
      | 'color'
      | 'width'
      | 'className'
      | 'cursor'
    >,
    Atoms {
  className?: Argument[] | string;
  component?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      component = 'div',
      display,
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
      flexBasis,
      flexDirection,
      alignItems,
      alignSelf,
      justifyContent,
      justifySelf,
      flexWrap,
      gap,
      flexGrow,
      flexShrink,
      ...restProps
    }: BoxProps,
    ref,
  ) => {
    const className = classnames(
      atoms({
        display,
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
        flexBasis,
        flexDirection,
        alignItems,
        alignSelf,
        justifyContent,
        justifySelf,
        flexWrap,
        gap,
        flexGrow,
        flexShrink,
      }),
      restProps.className,
    );

    return createElement(component, {
      ...restProps,
      className,
      ref,
    });
  },
);

Box.displayName = 'Box';
