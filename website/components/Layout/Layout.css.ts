import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';

const atoms = createAtomsFn(
  createAtomicStyles({
    properties: {
      display: ['flex'],
    },
  }),
);

export const root = atoms({
  display: 'flex',
});
