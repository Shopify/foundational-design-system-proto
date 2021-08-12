import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';

import {vars} from '../theme/vars.css';

const {colors, fontWeights, fontSizes, shadows} = vars;
const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
const borderWidth = [`0`, `1px`, `2px`, `3px`, `4px`, `5px`] as const;

const screens = {
  'screen-sm': '640px',
  'screen-md': '768px',
  'screen-lg': '1024px',
  'screen-xl': '1280px',
  'screen-2xl': '1536px',
};

const spacing = {
  ...vars.spacing,
  auto: 'auto',
};

const sizes = {
  ...spacing,
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

const unresponsiveStyles = createAtomicStyles({
  properties: {
    backgroundColor: colors,
    borderColor: colors,
    borderStyle: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ],
    borderWidth,
    boxShadow: shadows,
    color: colors,
    cursor: ['auto', 'default', 'pointer', 'grab', 'grabbing'],
    fontSize: fontSizes,
    fontWeight: fontWeights,
    opacity: [0.5, 0.8],
    outlineColor: colors,
    outlineStyle: [
      'auto',
      'none',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ],
    outlineWidth: borderWidth,
    overflow: ['visible', 'hidden', 'clip', 'scroll', 'auto', 'initial'],
    placeContent: ['center'],
    pointerEvents: ['auto', 'none'],
    textAlign: ['left', 'center', 'right'],
    textDecorationLine: [
      'none',
      'underline',
      'overline',
      'line-through',
      'blink',
      'initial',
    ],
    transition: vars.transitions,
    userSelect: ['none', 'auto', 'text', 'contain', 'all'],
    whiteSpace: [
      'normal',
      'nowrap',
      'pre',
      'pre-wrap',
      'pre-line',
      'break-spaces',
    ],
    wordBreak: ['normal', 'break-all', 'break-word', 'keep-all', 'initial'],
  },
  shorthands: {
    textDecoration: ['textDecorationLine'],
  },
});

const responsiveStyles = createAtomicStyles({
  conditions: {
    sm: {},
    md: {'@media': `screen and (min-width: ${screens['screen-md']})`},
    lg: {'@media': `screen and (min-width: ${screens['screen-lg']})`},
    xl: {'@media': `screen and (min-width: ${screens['screen-xl']})`},
    '2xl': {'@media': `screen and (min-width: ${screens['screen-2xl']})`},
  },
  defaultCondition: 'sm',
  properties: {
    top: sizes,
    right: sizes,
    bottom: sizes,
    left: sizes,
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    backgroundColor: colors,
    borderColor: colors,
    borderRadius: {none: '0px', rounded: '0.25rem', full: '9999px'},
    color: colors,
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
    flexGrow: [0, 1],
    flexShrink: [0],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    fontSize: fontSizes,
    fontWeight: fontWeights,
    // don't include "auto" for gap
    gap: vars.spacing,
    height: {...sizes, screen: '100vh'},
    justifyContent: [
      ...flexAlignment,
      'space-around',
      'space-evenly',
      'space-between',
    ],
    justifySelf: flexAlignment,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    marginTop: spacing,
    maxHeight: {...sizes, 0: '0px', full: '100%', screen: '100vh'},
    maxWidth: {
      ...sizes,
      ...screens,
      ...maxWidthSizes,
      full: '100%',
      'min-content': 'min-content',
      'max-content': 'max-content',
      prose: '60ch',
    },
    minHeight: {0: '0px', full: '100%', screen: '100vh'},
    minWidth: {
      0: '0px',
      full: '100%',
      'min-content': 'min-content',
      'max-content': 'max-content',
    },
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,
    placeContent: ['center'],
    position: ['absolute', 'relative', 'static', 'fixed', 'sticky', 'initial'],
    textAlign: ['left', 'center', 'right'],
    width: sizes,
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

export const atoms = createAtomsFn(unresponsiveStyles, responsiveStyles);

export type Atoms = Parameters<typeof atoms>[0];
