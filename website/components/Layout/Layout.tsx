import React, {ComponentProps} from 'react';
import clsx from 'clsx';
import {Container, ThemeProvider} from '@polaris/components';

import {themeClass} from '../theme.css';

import {root} from './Layout.css';

export const Layout = ({
  className,
  maxWidth = {
    xs: 'prose',
    sm: 'md',
    md: 'lg',
  },
  ...props
}: ComponentProps<typeof Container>) => (
  <ThemeProvider themeClass={themeClass}>
    <Container
      height="full"
      width="full"
      maxWidth="full"
      {...props}
      className={clsx(themeClass, root, className)}
    />
  </ThemeProvider>
);
