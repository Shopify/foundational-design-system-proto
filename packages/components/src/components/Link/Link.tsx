import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {atoms, Atoms} from '../../atoms';
import * as styles from './Link.css';

// TODO: Add atom & native props like box (or create helper function)

interface Props {
  children?: React.ReactNode;
  // Do we need to give the ability to access this?
  cursor?: Atoms['cursor'];
  // Should we do this instead with underline like material ui? > Less CSS
  decoration?: Atoms['textDecorationLine'];
  external?: boolean;
}

type PolymorphicLink = Polymorphic.ForwardRefComponent<'a', Props>;

export type LinkProps = Polymorphic.OwnProps<PolymorphicLink>;

export const Link = React.forwardRef((props, ref) => {
  const {as: Component = 'a', children, className = '', ...restProps} = props;

  return (
    <Component
      ref={ref}
      className={`${styles.root} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicLink;
