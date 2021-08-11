import React from 'react';
import {Atoms} from '@polaris/atoms';

import {Box, BoxProps} from '../Box';

export interface ContainerProps extends BoxProps {
  centerContent?: boolean;
  maxWidth?: Atoms['maxWidth'];
}

export const Container = ({
  centerContent = false,
  maxWidth = 'prose',
  ...rest
}: ContainerProps) => {
  return (
    <Box
      marginLeft="auto"
      marginRight="auto"
      maxWidth={maxWidth}
      {...(centerContent && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
      {...rest}
    />
  );
};

Container.displayName = 'Container';
