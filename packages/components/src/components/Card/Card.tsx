import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import * as styles from './Card.css';

interface Props {
  children: React.ReactNode;
}

type PolymorphicCard = Polymorphic.ForwardRefComponent<'article', Props>;

export type CardProps = Polymorphic.OwnProps<PolymorphicCard>;

export const Card = React.forwardRef((props, ref) => {
  const {as: Component = 'article', children, className, ...restProps} = props;

  return (
    <Component
      className={clsx(styles.root, className)}
      ref={ref}
      {...restProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicCard;
