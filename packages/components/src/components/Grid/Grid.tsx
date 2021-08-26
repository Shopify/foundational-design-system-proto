import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Atoms} from '../../atoms';
import {Box, BoxProps} from '../Box';

interface Props {
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

type PolymorphicGrid = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Box>,
  Omit<BoxProps, 'rows'> & Props
>;

export type GridProps = Polymorphic.OwnProps<PolymorphicGrid>;

export const Grid = React.forwardRef((props, ref) => {
  const {
    gap,
    grid,
    area,
    areas,
    columns,
    rows,
    autoRows,
    autoColumns,
    place,
    style,
    ...restProps
  } = props;

  return (
    <Box
      ref={ref}
      display="grid"
      gap={gap}
      placeContent={place}
      style={{
        grid,
        gridArea: area,
        gridTemplateColumns: columns?.join(' '),
        gridTemplateRows: rows?.join(' '),
        gridAutoRows: autoRows,
        gridAutoColumns: autoColumns,
        gridTemplateAreas: areas?.length ? `'${areas.join(`' '`)}'` : undefined,
        ...style,
      }}
      {...restProps}
    />
  );
}) as PolymorphicGrid;

Grid.displayName = 'Grid';
