import {atoms} from '../../atoms';

export const fixedStackingContext = atoms({
  position: 'fixed',
  zIndex: 'modal',
});

export const resetStackingContext = atoms({
  position: 'relative',
  zIndex: 0,
});

export const root = atoms({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  // Disable pointer-events to allow the Backdrop to be clickable.
  pointerEvents: 'none',
});

export const resetPointerEvents = atoms({
  pointerEvents: 'auto',
});
