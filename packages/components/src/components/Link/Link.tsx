import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import classNames from 'classnames';

import {atoms, getAtomProps} from '../../atoms';
import * as styles from './Link.css';

interface Props {
  children?: React.ReactNode;
  variant?: keyof typeof styles.variant;
  external?: boolean;
}

type PolymorphicLink = Polymorphic.ForwardRefComponent<'a', Props>;

export type LinkProps = Polymorphic.OwnProps<PolymorphicLink>;

export const Link = React.forwardRef((props, ref) => {
  const {
    as: Component = 'a',
    className,
    children,
    variant,
    external,
    ...restProps
  } = props;

  const {atomProps, nativeProps} = getAtomProps(restProps);

  const atomicClasses = atoms(atomProps);

  return (
    <Component
      ref={ref}
      className={classNames(
        styles.root,
        variant && styles.variant[variant],
        atomicClasses,
        className,
      )}
      rel={external ? 'noopener norefferer' : undefined}
      target={external ? '_blank' : undefined}
      {...nativeProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicLink;
