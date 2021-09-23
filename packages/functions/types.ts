export type TokenValue = string | number;

export interface Token {
  value?: TokenValue;
  aliasOf?: string;
  description: string;
  meta: TokenMeta;
}

export interface TokenMeta {
  figmaName: string | null;
  SassName: string | null;
  CSSName: string | null;
}

export interface Tokens {
  [key: string]: Token;
}

export type TokenFormat = 'css' | 'sass';
