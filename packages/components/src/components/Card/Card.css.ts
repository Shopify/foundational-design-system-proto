import {style} from '@vanilla-extract/css';

import {defaultVars} from '../../theme/vars.css';

export const root = style({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: defaultVars.spacing[2],
  boxShadow:
    '0px 0px 5px rgba(23,24,24,0.05) , 0px 1px 2px 0px rgba(0,0,0,0.15)',
});
