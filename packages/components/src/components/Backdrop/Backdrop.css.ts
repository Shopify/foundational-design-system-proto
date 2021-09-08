import {style} from '@vanilla-extract/css';

export const root = style({
  zIndex: -1,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // eslint-disable-next-line no-warning-comments
  // TODO: Grab value from tokens
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
});

export const invisible = style({
  backgroundColor: 'transparent',
});
