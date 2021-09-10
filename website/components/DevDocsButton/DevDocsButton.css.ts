import {style} from '@vanilla-extract/css';

import {devDocsVars} from '../theme.css';

export const root = style({
  backgroundColor: devDocsVars.color.surface,
  borderRadius: devDocsVars.spacing[1],
  paddingTop: devDocsVars.spacing[2],
  paddingBottom: devDocsVars.spacing[2],
  paddingLeft: devDocsVars.spacing[4],
  paddingRight: devDocsVars.spacing[4],
  // color: '#ffffff',
  fontWeight: 400,
  fontSize: devDocsVars.spacing[3.5],
  lineHeight: devDocsVars.spacing[5],
  fontFamily: devDocsVars.fontFamily,
  border: `1px solid ${devDocsVars.color.border}`,
  // ':hover': {
  //   backgroundColor: '#006e52',
  // },
  // ':active': {
  //   backgroundColor: '#005e46',
  //   boxShadow: '0 1px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(0,0,0,0.2)',
  // },
  // ':focus': {
  //   boxShadow: '0 1px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(0,0,0,0.2)',
  // },
});
