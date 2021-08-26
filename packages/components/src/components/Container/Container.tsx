import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Atoms} from '../../atoms';
import {Box, BoxProps} from '../Box';

interface Props {
  centerContent?: boolean;
  maxWidth?: Atoms['maxWidth'];
}

type PolymorphicContainer = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Box>,
  BoxProps & Props
>;

export type ContainerProps = Polymorphic.OwnProps<PolymorphicContainer>;

export const Container = React.forwardRef((props, ref) => {
  const {centerContent = false, maxWidth = 'prose', ...restProps} = props;
  return (
    <Box
      ref={ref}
      marginLeft="auto"
      marginRight="auto"
      maxWidth={maxWidth}
      {...(centerContent && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
      {...restProps}
    />
  );
}) as PolymorphicContainer;

Container.displayName = 'Container';
