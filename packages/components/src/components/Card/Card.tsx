import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Box, BoxProps} from '../Box';
// import {ButtonBase, ButtonBaseProps} from '../ButtonBase';

import * as styles from './Card.css';

interface Props {
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  children: React.ReactNode;
  //   buttonProps
}

type PolymorphicCard = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Box>,
  BoxProps & Props
>;

export type CardProps = Polymorphic.OwnProps<PolymorphicCard>;

export const Card = React.forwardRef((props, ref) => {
  const {href, onClick, ariaLabel, children, className, ...restProps} = props;

  return (
    <Box className={clsx(styles.root, className)} ref={ref} {...restProps}>
      {/* <ButtonBase> */}
      {children}
      {/* </ButtonBase> */}
    </Box>
  );
}) as PolymorphicCard;
