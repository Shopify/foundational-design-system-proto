import React, {ElementType, createElement, AllHTMLAttributes} from 'react';
import classnames from 'classnames';

import {variant, linkStyle} from './Link.css';

interface LinkProps extends AllHTMLAttributes<HTMLAnchorElement> {
  component?: ElementType;
  variant?: 'nounderline';
}

export const Link = ({
  component = 'a',
  children,
  className,
  ...props
}: LinkProps) => {
  return createElement(
    component,
    {
      className: classnames(
        linkStyle,
        props.variant && variant[props.variant],
        className,
      ),
      ...props,
    },
    children,
  );
};
