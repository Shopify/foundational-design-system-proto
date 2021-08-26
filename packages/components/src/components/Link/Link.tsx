import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {atoms, Atoms, getAtomProps} from '../../atoms';
import * as styles from './Link.css';

interface Props {
  children?: React.ReactNode;
  // Do we need to give the ability to access this?
  cursor?: Atoms['cursor'];
  // Should we do this instead with underline like material ui? > Less CSS
  textDecoration?: Atoms['textDecorationLine'];
  external?: boolean;
}

type PolymorphicLink = Polymorphic.ForwardRefComponent<'a', Props>;

export type LinkProps = Polymorphic.OwnProps<PolymorphicLink>;

export const Link = React.forwardRef((props, ref) => {
  const {as: Component = 'a', children, className = '', ...restProps} = props;

  const {atomProps, nativeProps} = getAtomProps(restProps);

  const atomicClasses = atoms(atomProps);

  return (
    <Component
      ref={ref}
      className={`${styles.root} ${atomicClasses} ${className}}`}
      {...nativeProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicLink;
