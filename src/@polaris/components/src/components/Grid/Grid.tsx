import React, {forwardRef, ElementType} from 'react';

import {Atoms} from '../../atoms/atoms.css';
import {Box, BoxProps} from '../Box/Box';

export interface GridProps extends Omit<BoxProps, 'rows'> {
  alignItems?: Atoms['alignItems'];
  alignSelf?: Atoms['alignSelf'];
  justifyContent?: Atoms['justifyContent'];
  justifySelf?: Atoms['justifySelf'];
  gap?: Atoms['gap'];
  place?: Atoms['placeContent'];
  grid?: string;
  rows?: string[];
  autoRows?: string;
  columns?: string[];
  areas?: string[];
  area?: string;
  component?: ElementType;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      component,
      alignItems,
      alignSelf,
      gap,
      grid,
      area,
      areas,
      columns,
      rows,
      autoRows,
      justifyContent,
      justifySelf,
      place,
      ...rest
    },
    ref,
  ) => {
    const {style, ...props} = rest;
    return (
      <Box
        ref={ref}
        display="grid"
        component={component}
        alignItems={alignItems}
        alignSelf={alignSelf}
        justifyContent={justifyContent}
        justifySelf={justifySelf}
        gap={gap}
        placeContent={place}
        style={{
          grid,
          gridArea: area,
          gridTemplateColumns: columns?.join(' '),
          gridTemplateRows: rows?.join(' '),
          gridAutoRows: autoRows,
          ...(areas?.length
            ? {gridTemplateAreas: `'${areas.join(`' '`)}'`}
            : {}),
          ...style,
        }}
        {...props}
      />
    );
  },
);

Grid.displayName = 'Grid';
