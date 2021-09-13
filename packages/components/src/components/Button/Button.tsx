import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';

import * as styles from './Button.css';

interface Props {}

type PolymorphicButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ButtonBase>,
  ButtonBaseProps & Props
>;

export type ButtonProps = Polymorphic.OwnProps<PolymorphicButton>;

export const Button = React.forwardRef((props, ref) => {
  const {className, ...restProps} = props;

  return (
    <ButtonBase
      ref={ref}
      className={clsx(styles.root, className)}
      {...restProps}
    />
  );
}) as PolymorphicButton;
