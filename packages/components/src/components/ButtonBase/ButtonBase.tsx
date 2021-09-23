import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx from 'clsx';

import * as styles from './ButtonBase.css';

interface Props {
  children?: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

type PolymorphicButtonBase = Polymorphic.ForwardRefComponent<'button', Props>;

export type ButtonBaseProps = Polymorphic.OwnProps<PolymorphicButtonBase>;

export const ButtonBase = React.forwardRef((props, ref) => {
  const {
    className = '',
    as: asProp = 'button',
    disabled = false,
    type = 'button',
    ...restProps
  } = props;

  const Component = (restProps.href ? 'a' : asProp) as 'button';

  return (
    <Component
      ref={ref}
      type={type}
      className={clsx(
        styles.root,
        {
          [styles.disabled]: disabled,
        },
        className,
      )}
      {...restProps}
    />
  );
}) as PolymorphicButtonBase;
