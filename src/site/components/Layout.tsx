import React, {ComponentProps} from 'react';
import classnames from 'classnames';
import {Box} from '@polaris/elements';

import {layoutStyle} from './layout.css';

const Layout = ({className, ...props}: ComponentProps<typeof Box>) => (
  <Box
    margin="base"
    {...props}
    className={classnames(layoutStyle, className)}
  />
);

export default Layout;
