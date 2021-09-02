import React, {ComponentProps} from 'react';
import clsx from 'clsx';
import {Container, ThemeProvider} from '@polaris/components';

import {themeClass} from '../theme.css';

export const Layout = ({
  className,
  ...props
}: ComponentProps<typeof Container>) => (
  <ThemeProvider themeClass={themeClass}>
    <Container
      height="full"
      width="full"
      maxWidth="full"
      {...props}
      className={clsx(themeClass, className)}
    />
  </ThemeProvider>
);
