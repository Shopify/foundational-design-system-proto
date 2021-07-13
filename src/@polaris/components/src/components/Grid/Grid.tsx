import React, {forwardRef, ElementType} from 'react';

import {Atoms} from '../../atoms/atoms.css';
import {Box, BoxProps} from '../Box/Box';

export interface GridProps extends Omit<BoxProps, 'rows'> {
  align?: Atoms['alignItems'];
  justify?: Atoms['justifyContent'];
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
      align,
      gap,
      grid,
      area,
      areas,
      columns,
      rows,
      autoRows,
      justify,
      place,
      ...restProps
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        display="grid"
        grid={grid}
        gridArea={area}
        gridTemplateAreas={areas}
        gridTemplateColumns={columns}
        gridTemplateRows={rows}
        gridAutoRows={autoRows}
        alignItems={align}
        justifyContent={justify}
        gap={gap}
        placeContent={place}
        {...restProps}
      />
    );
  },
);

Grid.displayName = 'Grid';
