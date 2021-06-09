// sprinkles.css.ts
import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';
import {rem} from 'polished';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
  // etc.
};

const fontSizes = {
  1: rem(13),
  2: rem(15),
  3: rem(16),
  4: rem(17),
  5: rem(21),
  6: rem(24),
  7: rem(27),
  caption: '$1',
  heading: '$4',
  subheading: '$1',
  input: '$3',
  body: '$2',
  buttonSlim: '$3',
  button: '$2',
  buttonLarge: '$4',
  displayXLarge: '$7',
  displayLarge: '$6',
  displayMedium: '$5',
  displaySmall: '$3',
};

const responsiveStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: {'@media': 'screen and (min-width: 768px)'},
    desktop: {'@media': 'screen and (min-width: 1024px)'},
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    fontSize: fontSizes,
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const colors = {
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  // etc.
};

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: {'@media': '(prefers-color-scheme: dark)'},
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors,
    // etc.
  },
});

export const atoms = createAtomsFn(responsiveStyles, colorStyles, fontSizes);

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0];
