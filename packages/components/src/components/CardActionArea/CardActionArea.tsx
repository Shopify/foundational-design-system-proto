import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {ButtonBase, ButtonBaseProps} from '../ButtonBase';

import * as styles from './CardActionArea.css';

interface Props {
  inset?: boolean;
  // children: React.ReactNode;
}

type PolymorphicCardActionArea = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ButtonBase>,
  ButtonBaseProps & Props
>;

export type CardActionAreaProps =
  Polymorphic.OwnProps<PolymorphicCardActionArea>;

export const CardActionArea = React.forwardRef((props, ref) => {
  const {inset, className, ...restProps} = props;

  return (
    <ButtonBase
      className={clsx(styles.root, className)}
      ref={ref}
      {...restProps}
    >
      {/* {children} */}
    </ButtonBase>
  );
}) as PolymorphicCardActionArea;
