import {style} from '@vanilla-extract/css';

import {atoms} from '../../atoms';

export const input = style([
  {
    border: '1px solid',
    borderRadius: '0.25rem',
    borderColor: '#2e2e2e',
  },
  atoms({
    paddingX: '2',
    paddingY: '1',
  }),
]);
