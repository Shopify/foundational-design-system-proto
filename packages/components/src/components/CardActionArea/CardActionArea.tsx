import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';

import * as styles from './CardActionArea.css';

type Inset = boolean | undefined;

type ExtractChildren<T extends Inset> = T extends false | undefined
  ? React.ReactNode
  : never;

export type Test = ExtractChildren<true>;

interface Props<T extends Inset = Inset> {
  inset?: T;
  children: ExtractChildren<T> | undefined;
  // children: React.ReactNode;
}

export type Test2 = Props<false>;
export type Huh = Test2['children'];

type PolymorphicCardActionArea = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ButtonBase>,
  Omit<ButtonBaseProps, 'children'> & Props
>;

export type CardActionAreaProps =
  Polymorphic.OwnProps<PolymorphicCardActionArea>;

export const CardActionArea = React.forwardRef((props, ref) => {
  const {inset = false, className, ...restProps} = props;

  return (
    <ButtonBase
      className={clsx(styles.root, {[styles.inset]: inset}, className)}
      ref={ref}
      {...restProps}
    />
  );
}) as PolymorphicCardActionArea;
