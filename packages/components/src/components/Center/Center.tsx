import React from 'react';

import {Box, BoxProps} from '../Box';

export type CenterProps<T extends React.ElementType> = BoxProps<T>;

export const Center = <T extends React.ElementType>(props: CenterProps<T>) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    />
  );
};

Center.displayName = 'Center';
