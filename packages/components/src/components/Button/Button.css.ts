import {style} from '@vanilla-extract/css';

import {defaultVars} from '../../theme/vars.css';

export const root = style({
  backgroundColor: defaultVars.color.primary,
  borderRadius: defaultVars.spacing[100],
  paddingTop: defaultVars.spacing[200],
  paddingBottom: defaultVars.spacing[200],
  paddingLeft: defaultVars.spacing[400],
  paddingRight: defaultVars.spacing[400],
  color: '#ffffff',
  fontWeight: 400,
  fontSize: defaultVars.typography.fontsize.body,
  lineHeight: defaultVars.spacing[500],
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
