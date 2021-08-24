import React from 'react';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';

import * as styles from './Button.css';

export interface ButtonProps extends ButtonBaseProps {}

export const Button = (props: ButtonProps) => {
  return <ButtonBase className={styles.root}>{props.children}</ButtonBase>;
};
