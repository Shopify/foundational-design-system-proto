import clsx from 'clsx';
import React from 'react';

import * as styles from './Backdrop.css';

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  invisible?: boolean;
}

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  (props, ref) => {
    const {className, invisible = false, ...restProps} = props;

    return (
      <div
        ref={ref}
        className={clsx(
          styles.root,
          {[styles.invisible]: invisible},
          className,
        )}
        aria-hidden
        {...restProps}
      />
    );
  },
);

Backdrop.displayName = 'Backdrop';
