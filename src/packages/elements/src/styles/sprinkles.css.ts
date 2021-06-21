import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';
import theme from 'src/packages/themes/src/themes/base';

const space = theme.space;

const margins = {
  ...space,
};

const styles = createAtomicStyles({
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

export const atoms = createAtomsFn(styles);

export type Atoms = Parameters<typeof atoms>[0];
