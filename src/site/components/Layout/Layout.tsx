import React, {ComponentProps} from 'react';
import classnames from 'classnames';
import {Box} from '@polaris/elements';

import {themeClass} from '../../styles/theme.css';

import {root} from './Layout.css';

export const Layout = ({className, ...props}: ComponentProps<typeof Box>) => (
  <Box
    margin="base"
    {...props}
    className={classnames(themeClass, root, className)}
  />
);
