import {HTMLAttributes} from 'react';

import {linkStyle, variant} from './Link.css';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  variant?: 'underline';
}

export const Link = ({children, ...props}: LinkProps) => {
  return (
    <a
      {...props}
      className={[linkStyle, props.variant && variant[props.variant]].join(' ')}
    >
      {children}
    </a>
  );
};
