import {createAtomicStyles, createAtomsFn} from '@vanilla-extract/sprinkles';
import colors from 'src/@polaris/tokens/src/colors';

import {vars} from '../themes/vars.css';

const {spacing, fontWeights, fontSizes} = vars;
const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;

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
    // Flex
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
