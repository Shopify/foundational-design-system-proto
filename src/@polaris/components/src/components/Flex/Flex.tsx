import React, {forwardRef} from 'react';

import {Atoms} from '../../atoms';
import {Box, BoxProps} from '../Box/Box';

export interface FlexProps extends Omit<BoxProps, 'wrap' | 'placeContent'> {
  alignItems?: Atoms['alignItems'];
  alignSelf?: Atoms['alignSelf'];
  justifyContent?: Atoms['justifyContent'];
  justifySelf?: Atoms['justifySelf'];
  basis?: Atoms['flexBasis'];
  direction?: Atoms['flexDirection'];
  grow?: Atoms['flexGrow'];
  shrink?: Atoms['flexShrink'];
  wrap?: Atoms['flexWrap'];
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      alignItems,
      alignSelf,
      basis,
      direction,
      grow,
      justifyContent,
      justifySelf,
      shrink,
      wrap,
      ...rest
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        display="flex"
        alignItems={alignItems}
        alignSelf={alignSelf}
        justifyContent={justifyContent}
        justifySelf={justifySelf}
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
