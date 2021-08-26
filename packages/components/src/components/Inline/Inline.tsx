import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Atoms} from '../../atoms';
import {Flex, FlexProps} from '../Flex';

interface Props {
  align?: Atoms['alignItems'];
  justify?: Atoms['justifyContent'];
}

type PolymorphicInline = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Flex>,
  FlexProps & Props
>;

export type InlineProps = Polymorphic.OwnProps<PolymorphicInline>;

export const Inline = React.forwardRef((props, ref) => {
  const {align, justify, wrap = 'wrap', ...restProps} = props;

  return (
    <Flex
      ref={ref}
      wrap={wrap}
      alignItems={align}
      justifyContent={justify}
      {...restProps}
    />
  );
}) as PolymorphicInline;
