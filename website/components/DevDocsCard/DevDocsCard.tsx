import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import {Card, CardProps} from '@polaris/components';

import * as styles from './DevDocsCard.css';

interface Props {}

type PolymorphicDevDocsCard = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Card>,
  CardProps & Props
>;

export type DevDocsCardProps = Polymorphic.OwnProps<PolymorphicDevDocsCard>;

export const DevDocsCard = React.forwardRef((props, ref) => {
  const {className, ...restProps} = props;

  return (
    <Card ref={ref} className={clsx(styles.root, className)} {...restProps} />
  );
}) as PolymorphicDevDocsCard;
