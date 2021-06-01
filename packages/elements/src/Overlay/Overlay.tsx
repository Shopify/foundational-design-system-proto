import React from 'react';
import {styled, theme, CSS} from '@polaris/themes';

export interface Props {
  css?: CSS;
  onClick?(): void;
}

export const StyledOverlay = styled('div', {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '-1',
  backgroundColor: theme.colors.backdrop,
});

export function Overlay({onClick, css}: Props) {
  return <StyledOverlay css={css} onClick={onClick} />;
}
