import React, {HTMLAttributes} from 'react';

import {linkStyle} from './Link.css';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {}

export const Link = ({children, ...props}: LinkProps) => {
  return (
    <a {...props} className={linkStyle}>
      {children}
    </a>
  );
};
