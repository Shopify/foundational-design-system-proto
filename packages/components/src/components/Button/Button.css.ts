import {style} from '@vanilla-extract/css';

import {defaultVars} from '../../theme/vars.css';

export const root = style({
  backgroundColor: defaultVars.color.primary,
  borderRadius: defaultVars.spacing[1],
  paddingTop: defaultVars.spacing[2],
  paddingBottom: defaultVars.spacing[2],
  paddingLeft: defaultVars.spacing[4],
  paddingRight: defaultVars.spacing[4],
  color: '#ffffff',
  fontWeight: 400,
  fontSize: defaultVars.spacing[3.5],
  lineHeight: defaultVars.spacing[5],
  fontFamily: defaultVars.fontFamily,
  ':hover': {
    backgroundColor: '#006e52',
  },
  ':active': {
    backgroundColor: '#005e46',
    boxShadow: '0 1px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(0,0,0,0.2)',
  },
  ':focus': {
    boxShadow: '0 1px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(0,0,0,0.2)',
  },
});
