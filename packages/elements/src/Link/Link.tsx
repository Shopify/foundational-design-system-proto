import React, {HTMLAttributes} from 'react';
import cc from 'classcat';

import styles from './Link.module.css';

type LinkProps = HTMLAttributes<HTMLAnchorElement>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({children, className, ...props}, ref) => {
    return (
      <a ref={ref} className={cc([styles.Link, className])} {...props}>
        {children}
      </a>
    );
  },
);
