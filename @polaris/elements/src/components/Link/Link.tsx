import React, {ElementType, AllHTMLAttributes} from 'react';
import classnames from 'classnames';

import {variant, linkStyle} from './Link.css';

interface LinkProps extends AllHTMLAttributes<HTMLAnchorElement> {
  component?: ElementType;
  variant?: 'nounderline';
}

export const Link = ({
  component: Element = 'a',
  children,
  className,
  ...props
}: LinkProps) => {
  return (
    <Element
      className={classnames(
        linkStyle,
        props.variant && variant[props.variant],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};
