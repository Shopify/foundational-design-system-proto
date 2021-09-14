export type TokenValue = string | number;

interface Token {
  value?: TokenValue;
  aliasOf?: string;
  description: string;
  meta: TokenMeta;
}

export interface TokenMeta {
  atomName: string | null;
  figmaName: string | null;
  SassVariableName: string | null;
  CSSVariableName: string | null;
}

export interface TokenList {
  [key: string]: Token;
}

export type TokenFormat = 'css' | 'sass';
