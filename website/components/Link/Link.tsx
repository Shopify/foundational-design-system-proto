import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import {Link as RouterLink} from 'react-router-dom';
import {
  Link as PolarisLink,
  LinkProps as PolarisLinkProps,
} from '@polaris/components';

type PolymorphicLink = Polymorphic.ForwardRefComponent<
  RouterLink,
  PolarisLinkProps
>;

export type LinkProps = Polymorphic.OwnProps<PolymorphicLink>;

export const Link = React.forwardRef((props, ref) => {
  const {as = RouterLink, ...restProps} = props;

  return <PolarisLink ref={ref} as={RouterLink} {...restProps} />;
}) as PolymorphicLink;
