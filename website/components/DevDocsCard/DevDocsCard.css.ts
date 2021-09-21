import {style} from '@vanilla-extract/css';

import {devDocsVars} from '../theme.css';

export const root = style({
  backgroundColor: devDocsVars.color.grey01,
  borderRadius: devDocsVars.spacing[2],
  color: devDocsVars.color.grey12,
  padding: devDocsVars.spacing[3],
  fontWeight: 400,
  fontSize: devDocsVars.spacing[3.5],
  lineHeight: devDocsVars.spacing[6],
  fontFamily: devDocsVars.fontFamily,
  border: `1px solid ${devDocsVars.color.grey06}`,
  boxShadow: `0px 2px 0px rgba(0, 0, 0, 0.1)`,
  transition: 'transform 200ms ease, box-shadow 200ms ease',

  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0px 4px 0px rgba(0, 0, 0, 0.1)`,
  },
  ':focus': {
    outline: `5px auto -webkit-focus-ring-color`,
  },
});
