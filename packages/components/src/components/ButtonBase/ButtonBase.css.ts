import {style} from '@vanilla-extract/css';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  // WebkitTapHighlightColor: 'transparent',
  // Reset default value
  backgroundColor: 'transparent',
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  // Remove the margin in Safari
  margin: 0,
  borderRadius: 0,
  // Remove the padding in Firefox
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  // Reset
  // '-moz-appearance': 'none',
  // Reset
  // '-webkit-appearance': 'none',
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  // '&::-moz-focus-inner': {
  // Remove Firefox dotted outline.
  // borderStyle: 'none',
  // },
  // '@media print': {
  //   colorAdjust: 'exact',
  // },
});

export const disabled = style({
  // Disable link interactions
  pointerEvents: 'none',
  cursor: 'default',
});
