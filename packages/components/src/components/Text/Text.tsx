import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Box, BoxProps} from '../Box';
import {useText, UseTextProps} from '../../hooks/typography';

type PolymorphicText = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Box>,
  BoxProps & {
    id?: string;
    variant?: UseTextProps['variant'];
    weight?: UseTextProps['weight'];
    align?: BoxProps['textAlign'];
    truncate?: boolean;
  }
>;

export type TextProps = Polymorphic.OwnProps<PolymorphicText>;

export const Text = React.forwardRef((props, ref) => {
  const {className, variant, weight, ...restProps} = props;
  const textStyles = useText({variant, weight});

  return (
    <Box ref={ref} className={clsx(textStyles, className)} {...restProps} />
  );
}) as PolymorphicText;

Text.displayName = 'Text';
