import React, {ComponentProps} from 'react';
import {Box} from '@polaris/components';

import {ThemeProvider} from '../ThemeProvider';

import {root} from './Layout.css';

export const Layout = ({className, ...props}: ComponentProps<typeof Box>) => (
  <ThemeProvider margin="4" className={[root, className]} {...props} />
);
