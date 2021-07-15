import React, {ComponentProps} from 'react';
import classnames from 'classnames';
import {docsTheme as theme, Container} from '@polaris/components';

import {root} from './Layout.css';

const {themeClass} = theme;

export const Layout = ({
  className,
  ...props
}: ComponentProps<typeof Container>) => (
  <Container
    maxWidth={{
      sm: 'prose',
      md: 'screen-md',
      lg: 'screen-lg',
    }}
    {...props}
    className={classnames(themeClass, root, className)}
  />
);
