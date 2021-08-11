import React, {forwardRef} from 'react';
import {Atoms} from '@polaris/atoms';

import {Box, BoxProps} from '../Box/Box';

export interface FlexProps extends Omit<BoxProps, 'wrap' | 'placeContent'> {
  basis?: Atoms['flexBasis'];
  direction?: Atoms['flexDirection'];
  grow?: Atoms['flexGrow'];
  shrink?: Atoms['flexShrink'];
  wrap?: Atoms['flexWrap'];
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  ({basis, direction, grow, shrink, wrap, ...rest}, ref) => {
    return (
      <Box
        ref={ref}
        display="flex"
        flexBasis={basis}
        flexDirection={direction}
        flexGrow={grow}
        flexShrink={shrink}
        flexWrap={wrap}
        {...rest}
      />
    );
  },
);

Flex.displayName = 'Flex';
