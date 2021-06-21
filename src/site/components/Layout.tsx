import React, {ComponentProps} from 'react';
import classnames from 'classnames';
import {themeClass, Box} from '@polaris/elements';

const Layout = ({className, ...props}: ComponentProps<typeof Box>) => (
  <Box
    margin="medium"
    {...props}
    className={classnames(themeClass, className)}
  />
);

export default Layout;
