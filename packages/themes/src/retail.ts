import {shade} from 'polished';

import {theme} from './stitches.config';

export const retailTheme = theme('retail', {
  colors: {
    // Semantic colors
    actionPrimary: '#4170CB',
    actionPrimaryHovered: shade(0.1, '#4170CB'),
    actionPrimaryPressed: shade(0.2, '#4170CB'),
    actionSecondary: '#323435',
    actionSecondaryHovered: shade(0.1, '#323435'),
    actionSecondaryPressed: shade(0.2, '#323435'),
    surface: '#323435',
    text: '#E3E5E7',
    textPrimary: '#4170CB',
    textSubdued: '#929698',
    textOnSecondary: '$colors$actionPrimary',
  },
  radii: {
    button: '0',
    card: '0.4rem',
  },
  space: {
    3: '24px',
  },
  sizes: {
    5: '48px',
    6: '52px',
    7: '64px',
    modalContent: '400px',
  },
});
