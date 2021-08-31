import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Atoms} from '../../atoms';
import {Flex, FlexProps} from '../Flex';

interface Props {
  align?: Atoms['alignItems'];
  justify?: Atoms['justifyContent'];
}

type PolymorphicStack = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Flex>,
  FlexProps & Props
>;

export type StackProps = Polymorphic.OwnProps<PolymorphicStack>;

export const Stack = React.forwardRef((props, ref) => {
  const {align, justify, wrap = 'wrap', ...restProps} = props;

  return (
    <Flex
      ref={ref}
      direction="column"
      wrap={wrap}
      alignItems={align}
      justifyContent={justify}
      {...restProps}
    />
  );
}) as PolymorphicStack;
