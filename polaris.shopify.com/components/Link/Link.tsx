import React, {ComponentProps} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link as PolarisLink} from '@polaris/elements';

type LinkProps = ComponentProps<typeof RouterLink> &
  ComponentProps<typeof PolarisLink>;

export const Link = (props: LinkProps) => (
  <PolarisLink component={RouterLink} {...props} />
);
