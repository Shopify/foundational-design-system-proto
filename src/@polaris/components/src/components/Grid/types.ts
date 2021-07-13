import {ElementType} from 'react';

import {Atoms} from '../../atoms/atoms.css';

export interface GridProps {
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
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: ElementType;
}

export interface GridItemProps extends Omit<GridProps, 'align' | 'justify'> {
  align?: Atoms['alignSelf'];
  justify?: Atoms['alignSelf'];
}
