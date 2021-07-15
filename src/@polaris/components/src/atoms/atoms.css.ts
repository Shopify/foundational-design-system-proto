import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';
import colors from 'src/@polaris/tokens/src/colors';

import {vars} from '../themes/vars.css';

const {spacing, fontWeights, fontSizes} = vars;
const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;

const screens = {
  'screen-sm': '640px',
  'screen-md': '768px',
  'screen-lg': '1024px',
  'screen-xl': '1280px',
  'screen-2xl': '1536px',
};

const sizes = {
  ...spacing,
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  full: '100%',
};

const maxWidthSizes = {
  0: '0px',
  none: 'none',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};

const styles = createAtomicStyles({
  conditions: {
    sm: {},
    md: {'@media': `screen and (min-width: ${screens['screen-md']})`},
    lg: {'@media': `screen and (min-width: ${screens['screen-lg']})`},
    xl: {'@media': `screen and (min-width: ${screens['screen-xl']})`},
    '2xl': {'@media': `screen and (min-width: ${screens['screen-2xl']})`},
  },
  defaultCondition: 'sm',
  properties: {
    marginTop: {...spacing, auto: 'auto'},
    marginBottom: {...spacing, auto: 'auto'},
    marginLeft: {...spacing, auto: 'auto'},
    marginRight: {...spacing, auto: 'auto'},
    paddingTop: {...spacing, auto: 'auto'},
    paddingBottom: {...spacing, auto: 'auto'},
    paddingLeft: {...spacing, auto: 'auto'},
    paddingRight: {...spacing, auto: 'auto'},
    textAlign: ['left', 'center', 'right'],
    backgroundColor: colors,
    borderRadius: spacing,
    display: [
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
      'flow-root',
      'contents',
    ],
    flexBasis: [0, 1, 2, 3, '25%', '30%', '50%', '70%', '75%'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    justifyContent: [
      ...flexAlignment,
      'space-around',
      'space-evenly',
      'space-between',
    ],
    justifySelf: flexAlignment,
    gap: spacing,
    flexGrow: [0, 1],
    flexShrink: [0],
    placeContent: ['center'],
    fontWeight: fontWeights,
    fontSize: fontSizes,
    width: sizes,
    minWidth: {
      0: '0px',
      full: '100%',
      'min-content': 'min-content',
      'max-content': 'max-content',
    },
    maxWidth: {
      ...sizes,
      ...screens,
      ...maxWidthSizes,
      full: '100%',
      'min-content': 'min-content',
      'max-content': 'max-content',
      prose: '60ch',
    },
    height: {...sizes, screen: '100vh'},
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
    },
    maxHeight: {
      ...sizes,
      0: '0px',
      full: '100%',
      screen: '100vh',
    },
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    spacing: ['gap'],
  },
});

export const atoms = createAtomsFn(styles);

export type Atoms = Parameters<typeof atoms>[0];
