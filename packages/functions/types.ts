export type TokenValue = string | number;

interface Token {
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

export interface TokenList {
  [key: string]: Token;
}

export type TokenFormat = 'css' | 'sass';
