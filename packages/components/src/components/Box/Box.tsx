import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';

import {classNames} from '../utilities/css';
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
      position,
      top,
      right,
      bottom,
      left,
      overflow,
      borderColor,
      borderStyle,
      borderWidth,
      boxShadow,
      userSelect,
      outlineColor,
      outlineStyle,
      outlineWidth,
      wordBreak,
      opacity,
      cursor,
      pointerEvents,
      transition,
      whiteSpace,
      ...rest
    },
    ref,
  ) => {
    const className =
      classNames(
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
          position,
          top,
          right,
          bottom,
          left,
          overflow,
          borderColor,
          borderStyle,
          borderWidth,
          boxShadow,
          userSelect,
          outlineColor,
          outlineStyle,
          outlineWidth,
          wordBreak,
          opacity,
          cursor,
          pointerEvents,
          transition,
          whiteSpace,
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
