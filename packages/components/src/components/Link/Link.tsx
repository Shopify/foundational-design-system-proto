import React from 'react';
import {Atoms} from '../../atoms';
import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from './Polymorphic';
import * as styles from './Link.css';

// TODO: Add atom & native props like box (or create helper function)

interface Props {
  children?: React.ReactNode;
  cursor?: Atoms['cursor'];
  decoration?: Atoms['textDecorationLine'];
  external?: boolean;
}

export type LinkProps<T extends React.ElementType> =
  PolymorphicComponentPropsWithRef<T, Props>;

type LinkComponent = (<T extends React.ElementType = 'a'>(
  props: LinkProps<T>,
) => React.ReactElement | null) & {displayName?: string};

export const Link: LinkComponent = React.forwardRef(
  <T extends React.ElementType = 'a'>(
    props: LinkProps<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const {as: Component = 'a', children, className = '', ...restProps} = props;

    return (
      <Component
        ref={ref}
        className={[styles.root, styles.variant[props.variant], className]
          .filter(Boolean)
          .join(' ')}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
