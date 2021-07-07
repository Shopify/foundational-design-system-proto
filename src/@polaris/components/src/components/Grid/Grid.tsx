import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';
import classnames from 'classnames';

import {atoms, Atoms} from '../../atoms/atoms.css';

import * as styles from './Grid.css';

export interface GridProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'
    >,
    Pick<
      Atoms,
      | 'alignItems'
      | 'alignSelf'
      | 'justifyContent'
      | 'justifySelf'
      | 'gap'
      | 'placeContent'
    > {
  grid?: string;
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
  gridTemplateAreas?: string[];
  gridArea?: string;
  component?: ElementType;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      component = 'div',
      alignItems,
      alignSelf,
      justifyContent,
      justifySelf,
      wrap,
      gap,
      grid,
      gridArea,
      gridTemplateAreas,
      gridTemplateRows,
      gridTemplateColumns,
      placeContent,
      ...restProps
    }: GridProps,
    ref,
  ) => {
    const className = classnames(
      styles.grid,
      atoms({
        alignItems,
        alignSelf,
        justifyContent,
        justifySelf,
        placeContent,
        wrap,
        gap,
      }),
      restProps.className,
    );

    const {style, ...props} = restProps;

    return createElement(component, {
      ...props,
      className,
      style: {
        grid,
        gridArea,
        gridTemplateAreas: `'${gridTemplateAreas?.join(`' '`)}'`,
        gridTemplateColumns,
        ...style,
      },
      ref,
    });
  },
);
