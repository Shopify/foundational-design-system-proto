import React, {forwardRef} from 'react';

import {Atoms} from '../../atoms';
import {Box, BoxProps} from '../Box/Box';

export interface FlexProps extends Omit<BoxProps, 'wrap' | 'placeContent'> {
  direction?: Atoms['flexDirection'];
  grow?: Atoms['flexGrow'];
  shrink?: Atoms['flexShrink'];
  wrap?: Atoms['flexWrap'];
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  ({direction, grow, shrink, wrap, ...rest}, ref) => {
    return (
      <div style={{outline: 'red 3px solid'}}>
        <Box
          ref={ref}
          display="flex"
          flexDirection={direction}
          flexGrow={grow}
          flexShrink={shrink}
          flexWrap={wrap}
          {...rest}
        />
      </div>
    );
  },
);

Flex.displayName = 'Flex';
