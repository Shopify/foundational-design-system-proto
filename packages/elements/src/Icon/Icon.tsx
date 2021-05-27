import React from 'react';
import {styled} from '@polaris/themes';

const Wrapper = styled('span', {
  display: 'inline-block',
  position: 'relative',
  width: 20,
  height: 20,
});

const Placeholder = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: '$iconSubdued',
});

const Img = styled('img', {
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export type IconSource =
  | React.FC<React.SVGProps<SVGSVGElement>>
  | 'placeholder'
  | string;

export interface IconProps {
  source: IconSource;
  alt?: string;
}

export function Icon({source, alt = '', ...props}: IconProps) {
  let sourceType: 'function' | 'placeholder' | 'external';
  if (typeof source === 'function') {
    sourceType = 'function';
  } else if (source === 'placeholder') {
    sourceType = 'placeholder';
  } else {
    sourceType = 'external';
  }

  const Component = source;
  const contentMarkup = {
    function: <Component focusable="false" aria-hidden="true" />,
    placeholder: <Placeholder />,
    external: (
      <Img
        src={`data:image/svg+xml;utf8,${source}`}
        alt={alt}
        aria-hidden="true"
      />
    ),
  };

  return <Wrapper {...props}>{contentMarkup[sourceType]}</Wrapper>;
}
