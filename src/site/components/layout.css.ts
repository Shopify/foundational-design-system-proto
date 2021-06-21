import {style} from '@vanilla-extract/css';
import theme from 'src/packages/themes/src/themes/base';

export const layoutStyle = style({
  fontFamily: theme.fonts.system,
  padding: theme.space[7],
});
