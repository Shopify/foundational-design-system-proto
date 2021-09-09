import React, {ComponentProps} from 'react';
import clsx from 'clsx';
import {Container, ThemeProvider} from '@polaris/components';

import {defaultThemeClass} from '..';

export const Layout = ({
  className,
  ...props
}: ComponentProps<typeof Container>) => (
  <ThemeProvider themeClass={defaultThemeClass}>
    <Container
      height="full"
      width="full"
      maxWidth="full"
      {...props}
      className={clsx(defaultThemeClass, className)}
    />
  </ThemeProvider>
);
