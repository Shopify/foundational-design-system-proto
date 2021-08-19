import React, {ComponentProps} from 'react';
import {themeClass, Container, classNames} from '@polaris/components';

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
