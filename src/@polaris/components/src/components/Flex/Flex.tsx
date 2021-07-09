import React, {forwardRef} from 'react';

import {Atoms} from '../../atoms';
import {Box, BoxProps} from '../Box/Box';

export interface FlexProps extends Omit<BoxProps, 'wrap' | 'placeContent'> {
  align?: Atoms['alignItems'];
  basis?: Atoms['flexBasis'];
  direction?: Atoms['flexDirection'];
  grow?: Atoms['flexGrow'];
  justify?: Atoms['justifyContent'];
  shrink?: Atoms['flexShrink'];
  wrap?: Atoms['flexWrap'];
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {align, basis, direction, grow, justify, shrink, wrap, ...restProps},
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        display="flex"
        alignItems={align}
        flexBasis={basis}
        flexDirection={direction}
        flexGrow={grow}
        flexShrink={shrink}
        flexWrap={wrap}
        justifyContent={justify}
        {...restProps}
      />
    );
  },
);

Flex.displayName = 'Flex';
