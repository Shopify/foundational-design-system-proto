import React from 'react';
import clsx from 'clsx';
// Ideally should be polymorphic, having typescript validation issues
// import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';

import * as styles from './CardActionArea.css';

interface CommonProps extends Omit<ButtonBaseProps, 'as' | 'children'> {
  className?: string;
  onClick?: React.MouseEventHandler;
}

// `cover` serves as a discrimated union which determines whether or not children accepted.
interface WithCoverProps extends CommonProps {
  cover: true;
}

interface WithoutCoverProps extends CommonProps {
  cover?: false;
  children: React.ReactNode;
}

export type CardActionAreaProps = WithCoverProps | WithoutCoverProps;

export const CardActionArea = (props: CardActionAreaProps) => {
  const {cover = false, className, ...restProps} = props;

  return (
    <ButtonBase
      className={clsx(styles.root, {[styles.cover]: cover}, className)}
      {...restProps}
    />
  );
};
