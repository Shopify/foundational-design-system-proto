import {ElementType, createElement, AllHTMLAttributes} from 'react';

import {classNames} from '../utilities/css';

import {variant, linkStyle} from './Link.css';

export interface LinkProps extends AllHTMLAttributes<HTMLAnchorElement> {
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
      className: classNames(
        linkStyle,
        props.variant && variant[props.variant],
        className,
      ),
      ...props,
    },
    children,
  );
};
