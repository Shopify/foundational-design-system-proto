import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';
import classnames from 'classnames';

import {atoms, Atoms} from '../../atoms';

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
      placeContent,
      justifySelf,
      flexWrap,
      gap,
      flexGrow,
      flexShrink,
      ...rest
    },
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
        placeContent,
        alignItems,
        alignSelf,
        justifyContent,
        justifySelf,
        flexWrap,
        gap,
        flexGrow,
        flexShrink,
      }),
      rest.className,
    ) || null;

    return createElement(component, {
      ...rest,
      className,
      ref,
    });
  },
);

Box.displayName = 'Box';
