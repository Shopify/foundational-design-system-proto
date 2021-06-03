import {shade} from 'polished';

import {theme} from './stitches.config';

export const shopTheme = theme('shop', {
  colors: {
    actionPrimary: '#5a31f4',
    actionPrimaryHovered: shade(0.1, '#5a31f4'),
    actionPrimaryPressed: shade(0.2, '#5a31f4'),
    textPrimary: '#5a31f4',
    textPrimaryHovered: shade(0.1, '#5a31f4'),
    textPrimaryPressed: shade(0.1, '#5a31f4'),
  },
  fonts: {
    system:
      "GTWalsheim, -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
  radii: {
    button: '0.2rem',
    card: '0.6rem',
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
