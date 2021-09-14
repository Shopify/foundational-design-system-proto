import merge from 'deepmerge';
import {
  createTheme as veCreateTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import {MapLeafNodes, CSSVarFunction} from '@vanilla-extract/private';
import * as tokens from '@polaris/tokens';

import {defaultVars} from './vars.css';

/**
 * Specialized DeepPartial that enables extending the base theme.
 */
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends {[key: string]: unknown}
    ? DeepPartial<T[K]> & {[key: string]: unknown}
    : T[K];
};

type DeepRequired<T> = {
  [K in keyof T]-?: DeepRequired<T[K]>;
};

// Disabling the error preferring interfaces as vanilla-extract's createTheme
// utility has a constraint which expects `Theme` to be a type alias.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Theme = {
  breakpoints: typeof tokens.breakpoints;
  color: {
    scheme: 'light' | 'dark';
    primary: string;
    placeholder2: string;
  };
  spacing: typeof tokens.spacing;
  fontFamily: string;
};

type ThemeOptions = DeepPartial<Theme>;

export const defaultTheme: Theme = {
  breakpoints: tokens.breakpoints,
  color: {
    scheme: 'light',
    primary: '#008060',
    placeholder2: '#BFCC94',
  },
  spacing: tokens.spacing,
  fontFamily:
    'ShopifySans,-apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif',
};

interface NullableTokens {
  [key: string]: string | NullableTokens | null;
}

// NOTE: This is a recreation of vanilla-extract's `ThemeVars` type
// as it is not exposed from the library.
type ThemeVars<TThemeContract extends NullableTokens> = MapLeafNodes<
  TThemeContract,
  CSSVarFunction
>;

/**
 * Generates a vanilla-extract theme consisting of the base Shopify theme contract.
 * Optionally accepts an `options` object to override and extend the base theme.
 *
 * By default, the theme will be generated with a `light` colors scheme.
 *
 * @param options - Options object to override and extend the base theme.
 * @returns
 * The theme class and vars object returned from the vanilla-extract createTheme utility.
 * See the [vanilla-extract documentation](https://github.com/seek-oss/vanilla-extract#createtheme) for more details.
 */
export function createTheme<T extends ThemeOptions>(options?: T) {
  const theme = merge(defaultTheme, options || {}) as Theme;

  const customVars = createThemeContract(options || {});

  // Order is important here. We need to ensure the defaultVars take precedence
  // since they are being applied directly to the @polaris/components.
  const vars = merge(customVars, defaultVars);

  const themeClass = veCreateTheme(vars, theme);

  return [themeClass, vars] as [string, ThemeVars<Theme & DeepRequired<T>>];
}
