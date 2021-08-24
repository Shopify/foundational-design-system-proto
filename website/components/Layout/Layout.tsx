import React, {ComponentProps} from 'react';
import clsx from 'clsx';
import {Container} from '@polaris/components';

import {themeClass} from '../theme.css';

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
