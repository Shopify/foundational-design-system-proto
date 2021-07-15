import React from 'react';

import {Atoms} from '../../atoms';
import {Flex, FlexProps} from '../Flex';

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
