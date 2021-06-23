import React, {ReactNode, ElementType} from 'react';
import classnames from 'classnames';

import {Box} from '../Box';
import {atoms, Atoms} from '../../atoms/atoms.css';

import * as styles from './Text.css';

interface TextStyleProps {
  weight?: keyof typeof styles.weight;
  align?: Atoms['textAlign'];
  type?: Exclude<keyof typeof styles.font, 'brand' | 'heading'>;
}

export interface TextProps extends TextStyleProps {
  component?: ElementType;
  children: ReactNode;
}

export const useTextStyles = ({
  weight = 'regular',
  type = 'body',
  align,
}: TextStyleProps) =>
  classnames(
    styles.font[type],
    atoms({textAlign: align}),
    styles.weight[weight],
  );

export const Text = ({
  component = 'span',
  weight,
  align,
  type,
  children,
}: TextProps) => {
  return (
    <Box component={component} className={useTextStyles({weight, type, align})}>
      {children}
    </Box>
  );
};
