import React from 'react';
import {Atoms, Flex, FlexProps} from '@polaris/components';

export interface StackProps extends FlexProps {
  align?: Atoms['alignItems'];
  justify?: Atoms['justifyContent'];
}

export function Stack({align, justify, wrap = 'wrap', ...rest}: StackProps) {
  return (
    <Flex
      direction="column"
      wrap={wrap}
      alignItems={align}
      justifyContent={justify}
      {...rest}
    />
  );
}
