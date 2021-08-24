import React from 'react';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';
import type {PolymorphicProps} from '../ButtonBase/ButtonBase';

import * as styles from './Button.css';

export type ButtonProps<
  TElementType extends React.ElementType = React.ElementType,
> = PolymorphicProps<
  TElementType,
  {
    className?: string;
  }
> &
  ButtonBaseProps<TElementType>;

export const Button: <T extends React.ElementType>(
  props: ButtonProps<T>,
) => React.ReactElement | null = (props: ButtonProps) => {
  return <ButtonBase className={styles.root} {...props} />;
};
