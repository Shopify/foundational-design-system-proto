import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';

import {vars} from './vars.css';

const {spacing} = vars;
const flexAlignment = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
];

const styles = createAtomicStyles({
  properties: {
    // Box
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    textAlign: ['left', 'center', 'right'],
    // Flex
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    alignItems: flexAlignment,
    alignSelf: flexAlignment,
    justifyContent: [
      ...flexAlignment,
      'space-around',
      'space-evenly',
      'space-between',
    ],
    justifySelf: flexAlignment,
    wrap: ['wrap', 'nowrap', 'wrap-reverse'],
    gap: spacing,
    flexGrow: [0, 1],
    flexShrink: [0],
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
