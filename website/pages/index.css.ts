import {style} from '@vanilla-extract/css';

export const modalRoot = style({
  display: 'grid',
  placeContent: 'center',
});

export const modalContent = style({
  maxHeight: '50vh',
  minWidth: '200px',
  overflow: 'auto',
  backgroundColor: 'snow',
  padding: '20px',
});
