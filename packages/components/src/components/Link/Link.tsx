import React, {AllHTMLAttributes, ElementType, createElement} from 'react';

import {atoms, Atoms} from '../../atoms';

import {root, variant} from './Link.css';

// Does this need the same code from Box to import both atom & native props?

/*  Does it need to be extended? Should all props just be listed out? 
    Should anything be omitted? 
    Should we be limiting the values in Atoms?
    Do we need a CSS file?
*/
interface LinkProps extends AllHTMLAttributes<HTMLAnchorElement> {
  ariaLabel?: string;
  //   children?: React.ReactNode;
  component?: ElementType;
  cursor?: Atoms['cursor'];
  decoration?: Atoms['textDecorationLine'];
  external?: boolean;
  //   id?: string;
  //   url?: string;
}

/*  What do we need children for? Accessing text? Icon?
    Do we need to using createElement so we can have ReactRouter verisons?
*/

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

// Link.displayName = 'Link';
