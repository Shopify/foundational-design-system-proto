import {style} from '@vanilla-extract/css';

// export const fixedStackingContext = atoms({
//   position: 'fixed',
//   zIndex: 'modal',
// });

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // eslint-disable-next-line no-warning-comments
  // TODO: Use theme zIndex
  zIndex: 1040,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
