import React from 'react';
import {Atoms, Flex, FlexProps} from '@polaris/components';

export interface InlineProps extends FlexProps {
  align?: Atoms['alignItems'];
  justify?: Atoms['justifyContent'];
}

export function Inline({align, justify, wrap = 'wrap', ...rest}: InlineProps) {
  return (
    <Flex wrap={wrap} alignItems={align} justifyContent={justify} {...rest} />
  );
}
