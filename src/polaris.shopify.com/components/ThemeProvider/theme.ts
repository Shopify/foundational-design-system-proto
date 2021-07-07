import {createInlineTheme} from '@vanilla-extract/dynamic';
import {vars, docsTheme} from '@polaris/components';

import config from '../../polaris.config';

export const tokens = config || docsTheme.tokens;
export const inlineThemeVars = createInlineTheme(vars, tokens);
