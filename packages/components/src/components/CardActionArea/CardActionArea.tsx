import React from 'react';
import clsx from 'clsx';
// import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';

import * as styles from './CardActionArea.css';

// `cover` serves as a discrimated union which determines whether or not children accepted.
interface WithCoverProps {
  cover: true;
}

interface WithoutCoverProps {
  cover?: false;
  children: React.ReactNode;
}

interface BaseProps extends Omit<ButtonBaseProps, 'as' | 'children'> {
  className?: string;
  onClick?: React.MouseEventHandler;
}

type CardActionAreaProps = (WithCoverProps | WithoutCoverProps) & BaseProps;

export const CardActionArea = (props: CardActionAreaProps) => {
  const {cover = false, className, ...restProps} = props;

  return (
    <ButtonBase
      className={clsx(styles.root, {[styles.cover]: cover}, className)}
      {...restProps}
    />
  );
};
