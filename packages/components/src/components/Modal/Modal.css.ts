import {atoms} from '../../atoms';

export const fixedStackingContext = atoms({
  position: 'fixed',
  zIndex: 'modal',
});

export const resetStackingContext = atoms({
  position: 'relative',
  zIndex: 0,
});

export const contentContainer = atoms({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  pointerEvents: 'none',
});

export const content = atoms({
  display: 'inline-block',
  pointerEvents: 'auto',
});
