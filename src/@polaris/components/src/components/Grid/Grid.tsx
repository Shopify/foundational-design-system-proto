import classNames from 'classnames';
import React, {forwardRef} from 'react';

import {atoms} from '../../atoms/atoms.css';

import {GridItem} from './GridItem';
import {GridProps} from './types';

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
          alignItems: align,
          justifyContent: justify,
          placeContent: place,
          ...restProps.style,
        },
        ref,
      },
      children,
    );
  },
);

Grid.displayName = 'Grid';
Grid.Item = GridItem;
