import React from 'react';
import {Inline} from '@polaris/components';
import {Link, LinkProps} from 'react-router-dom';

interface HeaderProps {
  title: string;
  links: LinkProps[];
}

export const Header = ({title, links}: HeaderProps) => (
  <Inline
    as="header"
    padding={{
      xs: '4',
      sm: '8',
      md: '12',
      lg: '16',
      xl: '20',
    }}
    justify="space-between"
    align="center"
    wrap={{
      xs: 'wrap',
      sm: 'nowrap',
    }}
  >
    <h1>{title}</h1>
    <Inline as="ul" gap="8" listStyleType="none" margin="0">
      {links.map(({to, children}) => (
        <li key={`header-link-${to}`}>
          <Link to={to}>{children}</Link>
        </li>
      ))}
    </Inline>
  </Inline>
);
