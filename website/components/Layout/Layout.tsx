import React, {ComponentProps} from 'react';
import clsx from 'clsx';

import {Container, ThemeProvider} from '../../../packages/components/src';
import {themeClass} from '../theme.css';

import {root} from './Layout.css';

export const Layout = ({
  className,
  ...props
}: ComponentProps<typeof Container>) => (
  <ThemeProvider themeClass={themeClass}>
    <Container
      maxWidth={{
        xs: 'prose',
        sm: 'md',
        md: 'lg',
      }}
      {...props}
      className={clsx(themeClass, root, className)}
    />
  </ThemeProvider>
);
