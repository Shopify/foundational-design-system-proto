import React, {forwardRef} from 'react';

import {atoms} from '../../atoms/atoms.css';

import {GridItemProps} from './types';

export const GridItem = forwardRef<HTMLElement, GridItemProps>(
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
      children,
      ...restProps
    },
    ref,
  ) => {
    return React.createElement(
      'div',
      {
        ...restProps,
        className: atoms({gap, display: 'grid'}),
        style: {
          grid,
          gridArea: area,
          gridTemplateAreas: areas ? `'${areas.join(`' '`)}'` : null,
          gridTemplateColumns: columns?.join(' '),
          gridTemplateRows: rows?.join(' '),
          gridAutoRows: autoRows,
          alignSelf: align,
          justifySelf: justify,
          placeContent: place,
          ...restProps.style,
        },
        ref,
      },
      children,
    );
  },
);

GridItem.displayName = 'GridItem';
