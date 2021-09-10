export interface Token {
  value: TokenValue;
  description: string;
  type: 'color' | 'dimension' | 'font' | 'duration';
  extensions: TokenExtensions;
}

export type TokenValue = string | number;

export interface TokenExtensions {
  'com.shopify.react': {
    atomName: string;
  } | null;
  'com.shopify.figma': {
    name: string;
  } | null;
  'com.shopify.sass': {
    variableName: string;
  } | null;
  'com.shopify.css': {
    variableName: string;
  } | null;
  [key: string]: any;
}

export interface TokenList {
  [key: string]: Token;
}

export type TokenFormat = 'css' | 'sass';
