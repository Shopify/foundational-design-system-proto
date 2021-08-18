import React, {AllHTMLAttributes} from 'react';
import {Box as PolarisBox} from '@polaris/components';

import {atoms, Atoms} from './strict-atoms.css';

interface Props
  extends Atoms,
    Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'size'
    > {}
export function AdminBox(props: Props) {
  const {style, children, ...rest} = props;
  const className = atoms({...rest});

  return (
    <PolarisBox className={className} style={style}>
      {children}
    </PolarisBox>
  );
}
