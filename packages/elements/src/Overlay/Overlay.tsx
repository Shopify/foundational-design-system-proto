import React from 'react';
import {styled} from '../../../../stitches.config';

const StyledOverlay = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.4)',
  zIndex: 0,
});

export function Overlay() {
  return <StyledOverlay />;
}
