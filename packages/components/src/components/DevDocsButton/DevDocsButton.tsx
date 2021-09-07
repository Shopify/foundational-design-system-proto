import React from 'react';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';
import type {PolymorphicProps} from '../ButtonBase/ButtonBase';

import * as styles from './DevDocsButton.css';

export type DevDocsButtonProps<
  TElementType extends React.ElementType = React.ElementType,
> = PolymorphicProps<
  TElementType,
  {
    className?: string;
  }
> &
  ButtonBaseProps<TElementType>;

export const DevDocsButton: <T extends React.ElementType>(
  props: DevDocsButtonProps<T>,
) => React.ReactElement | null = (props: DevDocsButtonProps) => {
  return <ButtonBase className={styles.root} {...props} />;
};
