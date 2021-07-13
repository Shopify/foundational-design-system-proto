import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';
import classNames from 'classnames';

import {atoms, Atoms} from '../../atoms';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'
    >,
    Atoms {
  grid?: string;
  gridArea?: string;
  gridAutoRows?: string;
  gridTemplateAreas?: string[];
  gridTemplateColumns?: string[];
  gridTemplateRows?: string[];
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
      grid,
      gridArea,
      gridAutoRows,
      gridTemplateAreas,
      gridTemplateColumns,
      gridTemplateRows,
      ...restProps
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
      restProps.className,
    );

    return createElement(component, {
      ...restProps,
      className,
      style: {
        grid,
        gridArea,
        gridTemplateAreas: gridTemplateAreas
          ? `'${gridTemplateAreas.join(`' '`)}'`
          : null,
        gridAutoRows,
        gridTemplateColumns: gridTemplateColumns?.join(' '),
        gridTemplateRows: gridTemplateRows?.join(' '),
        ...restProps.style,
      },
      ref,
    });
  },
);

Box.displayName = 'Box';
