import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Atoms} from '../../atoms';
import {Box, BoxProps} from '../Box';

interface Props {
  direction?: Atoms['flexDirection'];
  grow?: Atoms['flexGrow'];
  shrink?: Atoms['flexShrink'];
  wrap?: Atoms['flexWrap'];
}

type PolymorphicFlex = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Box>,
  Omit<BoxProps, 'wrap' | 'placeContent'> & Props
>;

export type FlexProps = Polymorphic.OwnProps<PolymorphicFlex>;

export const Flex = React.forwardRef((props, ref) => {
  const {direction, grow, shrink, wrap, ...restProps} = props;

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection={direction}
      flexGrow={grow}
      flexShrink={shrink}
      flexWrap={wrap}
      {...restProps}
    />
  );
}) as PolymorphicFlex;

Flex.displayName = 'Flex';
