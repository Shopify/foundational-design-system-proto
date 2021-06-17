import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';

import {vars} from './theme.css';

const space = vars.spacing;

const margins = {
  ...space,
};

const responsiveStyles = createAtomicStyles({
  properties: {
    marginTop: margins,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

export const atoms = createAtomsFn(responsiveStyles);

export type Atoms = Parameters<typeof atoms>[0];
