import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import classNames from 'classnames';

import {atoms, Atoms, getAtomProps} from '../../atoms';
import * as styles from './Link.css';

interface Props {
  children?: React.ReactNode;
  //   cursor?: Atoms['cursor'];
  textDecoration?: Atoms['textDecorationLine'];
  variant?: keyof typeof styles.variant;
  //   textDecorationHover?: 'hoverNone' | 'hoverUnderline';
  external?: boolean;
}

type PolymorphicLink = Polymorphic.ForwardRefComponent<'a', Props>;

export type LinkProps = Polymorphic.OwnProps<PolymorphicLink>;

export const Link = React.forwardRef((props, ref) => {
  const {
    as: Component = 'a',
    className,
    children,
    // textDecoration,
    variant,
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
      {...nativeProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicLink;
