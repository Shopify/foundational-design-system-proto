import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx from 'clsx';

import {atoms, getAtomProps} from '../../atoms';

import * as styles from './Link.css';

interface Props {
  children: React.ReactNode;
  external?: boolean;
  variant?: keyof typeof styles.variant;
}

type PolymorphicLink = Polymorphic.ForwardRefComponent<'a', Props>;

export type LinkProps = Polymorphic.OwnProps<PolymorphicLink>;

export const Link = React.forwardRef((props, ref) => {
  const {
    as: Component = 'a',
    children,
    className,
    external,
    variant,
    ...restProps
  } = props;

  const {atomProps, nativeProps} = getAtomProps(restProps);

  const atomicClasses = atoms(atomProps);

  const rel = external ? 'noopener norefferer' : undefined;

  const target = external ? '_blank' : undefined;

  return (
    <Component
      className={clsx(
        styles.root,
        variant && styles.variant[variant],
        atomicClasses,
        className,
      )}
      ref={ref}
      rel={rel}
      target={target}
      {...nativeProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicLink;
