import React, {forwardRef} from 'react';

import {Atoms} from '../../atoms/atoms.css';
import {Box, BoxProps} from '../Box/Box';

export interface GridProps extends Omit<BoxProps, 'rows'> {
  gap?: Atoms['gap'];
  place?: Atoms['placeContent'];
  grid?: string;
  rows?: string[];
  autoRows?: string;
  autoColumns?: string;
  columns?: string[];
  areas?: string[];
  area?: string;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      component,
      gap,
      grid,
      area,
      areas,
      columns,
      rows,
      autoRows,
      autoColumns,
      place,
      ...rest
    },
    ref,
  ) => {
    const {UNSAFE_style, ...props} = rest;
    return (
      <Box
        ref={ref}
        display="grid"
        component={component}
        gap={gap}
        placeContent={place}
        UNSAFE_style={{
          grid,
          gridArea: area,
          gridTemplateColumns: columns?.join(' '),
          gridTemplateRows: rows?.join(' '),
          gridAutoRows: autoRows,
          gridAutoColumns: autoColumns,
          gridTemplateAreas: areas?.length
            ? `'${areas.join(`' '`)}'`
            : undefined,
          ...UNSAFE_style,
        }}
        {...props}
      />
    );
  },
);

Grid.displayName = 'Grid';
