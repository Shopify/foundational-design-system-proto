import React from 'react';
import {styled, theme, CSS} from '@polaris/themes';

export interface Props {
  css?: CSS;
  onClick?(): void;
}

export const StyledOverlay = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.backdrop,
});

export function Overlay({onClick, css}: Props) {
  return <StyledOverlay css={css} onClick={onClick} />;
}
