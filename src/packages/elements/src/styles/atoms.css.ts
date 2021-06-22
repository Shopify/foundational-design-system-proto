import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';

import {vars} from './vars.css';

const {spacing} = vars;

const styles = createAtomicStyles({
  properties: {
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    textAlign: ['left', 'center', 'right'],
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

export const atoms = createAtomsFn(styles);

export type Atoms = Parameters<typeof atoms>[0];
