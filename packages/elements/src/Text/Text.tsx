import React, {HTMLAttributes} from 'react';
import cc from 'classcat';

import styles from './Text.module.css';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'caption' | 'heading' | 'subheading' | 'body';
  variant?: 'subdued' | 'positive' | 'critical' | 'bold' | 'code';
}
export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({children, className, size, variant, ...props}, ref) => {
    return (
      <span
        ref={ref}
        className={cc([styles.root, styles[size], styles[variant], className])}
        {...props}
      >
        {children}
      </span>
    );
  },
);
