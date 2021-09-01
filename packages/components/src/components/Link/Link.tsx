import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx from 'clsx';

import {atoms, getAtomProps} from '../../atoms';

import * as styles from './Link.css';

interface Props {
  children: React.ReactNode;
  external?: boolean;
  underline?: keyof typeof styles.underline;
}

type PolymorphicLink = Polymorphic.ForwardRefComponent<'a', Props>;

export type LinkProps = Polymorphic.OwnProps<PolymorphicLink>;

export const Link = React.forwardRef((props, ref) => {
  const {
    as: Component = 'a',
    children,
    className,
    external,
    underline,
    ...restProps
  } = props;

  const {atomProps, nativeProps} = getAtomProps(restProps);

  const atomicClasses = atoms(atomProps);

  const newTab = !external
    ? null
    : {
        rel: 'noopener norefferer',
        target: '_blank',
      };

  return (
    <Component
      className={clsx(
        styles.root,
        underline && styles.underline[underline],
        atomicClasses,
        className,
      )}
      ref={ref}
      {...newTab}
      {...nativeProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicLink;
