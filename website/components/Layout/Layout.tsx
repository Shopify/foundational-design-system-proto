import React, {ComponentProps} from 'react';
import {Container, classNames} from '@polaris/components';

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
    className={classNames(themeClass, root, className)}
  />
);
