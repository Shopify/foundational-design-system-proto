import {rem} from 'polished';
import * as tokens from '@polaris/tokens';

export const borderWidths = {
  thin: '0.1rem',
  control: '0.2rem',
};

export const colors = {
  text: '',
  background: tokens.colors['gray-0'],
  primary: '',
  secondary: '',
  accent: '',
  highlight: '',
  muted: '',
};

export const fonts = {
  system:
    "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  mono: "Monaco, Consolas, 'Lucida Console', monospace",
};

export const fontWeights = {
  base: 400,
  medium: 500,
  bold: 700,
  badge: 400,
};

export const fontSizes = {
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

export const media = {
  bp1: '(min-width: 520px)',
  bp2: '(min-width: 900px)',
  bp3: '(min-width: 1200px)',
  bp4: '(min-width: 1800px)',
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

export const radii = {
  base: '0.4rem',
  wide: '0.8rem',
  full: '50%',
};

export const shadows = {
  card: '0px 0px 5px $colors$shadowFromAmbientLight, 0px 1px 2px $colors$shadowFromDirectLight',
  popover:
    '-1px 0px 20px $colors$shadowFromAmbientLight, 0px 1px 5px $colors$shadowFromDirectLight',
  modal:
    '0px 26px 80px $colors$shadowFromDimLight, 0px 0px 1px $colors$shadowFromDimLight',
  topBar: '0 2px 2px -1px $colors$shadowFromDirectLight',
  button: '0 1px 0 rgba(0, 0, 0, 0.05)',
  buttonInner: 'inset 0 -1px 0 rgba(0, 0, 0, 0.2)',
  buttonPressedInner: 'inset 0 1px 0 rgba(0, 0, 0, 0.15)',
  bannerDefault:
    'inset 0 0.1rem 0 0 $colors$borderNeutralSubdued, inset 0 0 0 0.1rem $colors$borderNeutralSubdued',
  bannerSuccess:
    'inset 0 0.1rem 0 0 $colors$borderSuccessSubdued, inset 0 0 0 0.1rem $colors$borderSuccessSubdued',
  bannerHighlight:
    'inset 0 0.1rem 0 0 $colors$borderHighlightSubdued, inset 0 0 0 0.1rem $colors$borderHighlightSubdued',
  bannerWarning:
    'inset 0 0.1rem 0 0 $colors$borderWarningSubdued, inset 0 0 0 0.1rem $colors$borderWarningSubdued',
  bannerCritical:
    'inset 0 0.1rem 0 0 $colors$borderCriticalSubdued, inset 0 0 0 0.1rem $colors$borderCriticalSubdued',
};

export const sizes = {
  1: '5px',
  2: '10px',
  3: '15px',
  4: '20px',
  5: '25px',
  6: '35px',
  7: '45px',
  8: '65px',
  9: '80px',
  choice: '2rem',
  icon: '1rem',
  modalContent: 'auto',
};

export const space = {
  1: '5px',
  2: '10px',
  3: '15px',
  4: '20px',
  5: '25px',
  6: '35px',
  7: '45px',
  8: '65px',
  9: '80px',
  none: '0px',
  extraTight: '4px',
  tight: '8px',
  baseTight: '12px',
  base: '16px',
  loose: '20px',
  extraLoose: '32px',
};

export const transitions = {
  fastEase: '100ms cubic-bezier(0.4, 0.22, 0.28, 1)',
  slowEase: '100ms cubic-bezier(0.4, 0.22, 0.28, 1)',
  fastEaseIn: '150ms cubic-bezier(0.5, 0.1, 1, 1)',
  slowEaseIn: '150ms cubic-bezier(0.5, 0.1, 1, 1)',
};

export const zIndices = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  max: '999',
};

const theme = {
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  media,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
};

export default theme;
