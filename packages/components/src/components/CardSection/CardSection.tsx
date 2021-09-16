import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import * as styles from './CardSection.css';

interface Props {
  children: React.ReactNode;
}

type PolymorphicCardSection = Polymorphic.ForwardRefComponent<'section', Props>;

export type CardSectionProps = Polymorphic.OwnProps<PolymorphicCardSection>;

export const CardSection = React.forwardRef((props, ref) => {
  const {as: Component = 'section', children, className, ...restProps} = props;

  return (
    <Component
      className={clsx(styles.root, className)}
      ref={ref}
      {...restProps}
    >
      {children}
    </Component>
  );
}) as PolymorphicCardSection;
