import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Box, BoxProps} from '../Box';

interface Props {}

type PolymorphicCenter = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Box>,
  BoxProps & Props
>;

export type CenterProps = Polymorphic.OwnProps<PolymorphicCenter>;

export const Center = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    />
  );
}) as PolymorphicCenter;

Center.displayName = 'Center';
