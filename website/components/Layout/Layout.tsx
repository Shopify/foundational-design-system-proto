import React, {ComponentProps} from 'react';
import clsx from 'clsx';
import {themeClass, Container} from '@polaris/components';

import {root} from './Layout.css';

export const Layout = ({
  className,
  ...props
}: ComponentProps<typeof Container>) => (
  <Container
    maxWidth={{
      xs: 'prose',
      sm: 'md',
      md: 'lg',
    }}
    {...props}
    className={clsx(themeClass, root, className)}
  />
);
