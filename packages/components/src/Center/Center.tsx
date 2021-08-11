import React from 'react';

import {Box, BoxProps} from '../Box';

export interface CenterProps extends BoxProps {}

export const Center = ({...rest}: CenterProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" {...rest} />
  );
};

Center.displayName = 'Center';
