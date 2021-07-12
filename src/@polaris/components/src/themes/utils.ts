import {createTheme} from '@vanilla-extract/css';
import {Properties} from 'csstype';

import docsTokens from './docs/tokens';
import {vars} from './vars.css';

export const mapToProperty =
  <T extends keyof Properties<string | number>>(property: T) =>
  (value: string | number) => {
    const styleRule = {[property]: value};

    return styleRule;
  };

export const createPolarisTheme = (tokens: typeof docsTokens) => ({
  tokens,
  themeClass: createTheme(vars, tokens),
});
