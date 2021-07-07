import path from 'path';

import {createTheme} from '@vanilla-extract/css';
import {vars, docsTheme} from '@polaris/components';

import config from '../../polaris.config';

export const tokens = config || docsTheme.token;
export const themeClass = createTheme(vars, tokens);
