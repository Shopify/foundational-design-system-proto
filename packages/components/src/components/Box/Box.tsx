import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';

import classNames from '../../utilities/classNames';
import {atoms, Atoms} from '../../atoms';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'size'
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
      alignItems,
      alignSelf,
      justifyContent,
      placeContent,
      justifySelf,
      gap,
      spacing,
      flex,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      position,
      top,
      right,
      bottom,
      left,
      overflow,
      borderStyle,
      userSelect,
      outlineStyle,
      wordBreak,
      cursor,
      pointerEvents,
      whiteSpace,
      ...rest
    },
    ref,
  ) => {
    const className = classNames(
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
        flex,
        flexDirection,
        placeContent,
        alignItems,
        alignSelf,
        justifyContent,
        justifySelf,
        flexWrap,
        gap,
        spacing,
        flexGrow,
        flexShrink,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        position,
        top,
        right,
        bottom,
        left,
        overflow,
        borderStyle,
        userSelect,
        outlineStyle,
        wordBreak,
        cursor,
        pointerEvents,
        whiteSpace,
      }),
      rest.className,
    );

    return createElement(component, {
      ...rest,
      className,
      ref,
    });
  },
);

Box.displayName = 'Box';
