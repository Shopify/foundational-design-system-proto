import {style} from '@vanilla-extract/css';

import {devDocsVars} from '../theme.css';

export const root = style({
  backgroundColor: devDocsVars.color.grey01,
  borderRadius: devDocsVars.spacing[100],
  paddingTop: '3px',
  paddingBottom: '5px',
  paddingLeft: devDocsVars.spacing[300],
  paddingRight: devDocsVars.spacing[300],
  fontWeight: 400,
  fontSize: devDocsVars.typography.fontsize.body,
  lineHeight: devDocsVars.spacing[600],
  fontFamily: devDocsVars.fontFamily,
  border: `1px solid ${devDocsVars.color.grey10}`,
  boxShadow: `inset 0 -2px 0 ${devDocsVars.color.grey06},inset 0 1px 0 ${devDocsVars.color.grey0}`,
  transition: `ease background-color 200ms, ease box-shadow 200ms, ease padding-top 200ms, ease padding-bottom 200ms`,

  ':hover': {
    backgroundColor: devDocsVars.color.grey02,
    borderColor: devDocsVars.color.grey11,
    paddingTop: devDocsVars.spacing[100],
    paddingBottom: devDocsVars.spacing[100],
    boxShadow: `inset 0 -1px 0 ${devDocsVars.color.grey06},inset 0 1px 0 ${devDocsVars.color.grey01}`,
  },
  ':active': {
    backgroundColor: devDocsVars.color.grey03,
    boxShadow: `inset 0 0 0 ${devDocsVars.color.grey06},inset 0 2px 0 ${devDocsVars.color.grey06};`,
    borderColor: devDocsVars.color.grey12,
    paddingTop: '3px',
    paddingBottom: '5px',
  },
  ':focus': {
    outline: `5px auto -webkit-focus-ring-color`,
  },
});
