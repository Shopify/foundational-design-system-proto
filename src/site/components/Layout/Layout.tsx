import React, {ComponentProps} from 'react';
import classnames from 'classnames';
import {docsTheme as theme, Box} from '@polaris/elements';

import {root} from './Layout.css';

const {themeClass} = theme;

export const Layout = ({className, ...props}: ComponentProps<typeof Box>) => (
  <Box
    margin="base"
    {...props}
    className={classnames(themeClass, root, className)}
  />
);
