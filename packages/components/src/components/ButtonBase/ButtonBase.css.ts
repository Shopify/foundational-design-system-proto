import {style} from 'vanilla-extract/css';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  //   WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  //   '-moz-appearance': 'none', // Reset
  //   '-webkit-appearance': 'none', // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none', // Remove Firefox dotted outline.
  },
  '&$disabled': {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'default',
  },
  '@media print': {
    colorAdjust: 'exact',
  },
});
