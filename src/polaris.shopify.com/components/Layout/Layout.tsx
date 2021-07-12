import React, {ComponentProps} from 'react';
import {Box, ThemeProvider} from '@polaris/components';

import theme from '../../polaris.css';
import inlineTheme from '../../inline-theme';

import {root} from './Layout.css';

export const Layout = ({className, ...props}: ComponentProps<typeof Box>) => (
  <ThemeProvider
    defaultTheme={theme || inlineTheme}
    margin="4"
    className={[root, className]}
    {...props}
  />
);
