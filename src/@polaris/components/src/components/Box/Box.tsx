import React, {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
  CSSProperties,
} from 'react';
import classnames from 'classnames';

import {atoms, Atoms} from '../../atoms';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      | 'content'
      | 'height'
      | 'translate'
      | 'color'
      | 'width'
      | 'cursor'
      | 'size'
      | 'style'
    >,
    Atoms {
  UNSAFE_style?: CSSProperties;
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
      spacing,
      flexGrow,
      flexShrink,
      backgroundColor,
      borderRadius,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      color,
      UNSAFE_style,
      ...rest
    },
    ref,
  ) => {
    const className =
      classnames(
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
          spacing,
          flexGrow,
          flexShrink,
          backgroundColor,
          borderRadius,
          width,
          minWidth,
          maxWidth,
          height,
          minHeight,
          maxHeight,
          color,
        }),
        rest.className,
      ) || null;

    return createElement(component, {
      ...rest,
      className,
      style: UNSAFE_style,
      ref,
    });
  },
);

Box.displayName = 'Box';
