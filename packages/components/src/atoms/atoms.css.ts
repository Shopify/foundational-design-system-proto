import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';

import {vars} from '../theme/vars.css';

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;

const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
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

const unresponsiveStyles = createAtomicStyles({
  properties: {
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
    cursor: ['auto', 'default', 'pointer', 'grab', 'grabbing'],
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
    xs: {},
    sm: {'@media': `screen and (min-width: ${breakpoints.sm})`},
    md: {'@media': `screen and (min-width: ${breakpoints.md})`},
    lg: {'@media': `screen and (min-width: ${breakpoints.lg})`},
    xl: {'@media': `screen and (min-width: ${breakpoints.xl})`},
  },
  defaultCondition: 'xs',
  properties: {
    top: sizes,
    right: sizes,
    bottom: sizes,
    left: sizes,
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
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
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    // don't include "auto" for gap
    gap: vars.spacing,
    height: {...sizes},
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
    maxHeight: {...sizes, 0: '0px', full: '100%'},
    maxWidth: {
      ...sizes,
      ...breakpoints,
      0: '0px',
      none: 'none',
      full: '100%',
      'min-content': 'min-content',
      'max-content': 'max-content',
      prose: '60ch',
    },
    minHeight: {0: '0px', full: '100%'},
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

export function isAtomsKey(key: string): key is keyof Atoms {
  return atoms.properties.has(key as keyof Atoms);
}
