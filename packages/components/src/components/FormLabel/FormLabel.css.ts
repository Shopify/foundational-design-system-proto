import {style} from '@vanilla-extract/css';

import {atoms} from '../../atoms';
import {defaultVars as vars} from '../../theme/vars.css';

export const formLabel = style([
  atoms({
    display: 'block',
  }),
  {
    fontSize: '0.9375rem',
    fontWeight: 500,
    textAlign: 'start',
    opacity: 1,

    selectors: {
      '&[disabled]': {
        opacity: 0.4,
      },
    },
  },
]);

export const requiredIndicator = style({
  marginInlineStart: vars.spacing[1],
  color: '#9B2C2C',
});
