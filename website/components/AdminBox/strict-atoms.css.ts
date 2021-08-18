import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';

const baseUnit = 16;
const baseFontSize = 10;

function rem(value: number) {
  return `${value / baseFontSize}rem`;
}

const sizes = {
  zero: rem(0),
  one: rem(1),
  baseExtraTight: rem(baseUnit / 4),
  baseTight: rem(baseUnit / 2),
  base: rem(baseUnit),
  baseLoose: rem(baseUnit * 2),
  baseExtraLoose: rem(baseUnit * 4),
};

const responsiveStyles = createAtomicStyles({
  properties: {
    height: {...sizes, full: '100%'},
    width: {...sizes, full: '100%'},
    maxHeight: {...sizes, full: '100%'},
    maxWidth: {...sizes, full: '100%'},
    marginBottom: sizes,
    marginLeft: sizes,
    marginRight: sizes,
    marginTop: sizes,
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

export const atoms = createAtomsFn(responsiveStyles);

export type Atoms = Parameters<typeof atoms>[0];
