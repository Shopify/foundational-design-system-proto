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

// eslint-disable-next-line line-comment-position
export type TokenPlatform = 'css' | 'sass' | 'figma'; // | 'ios' | 'android';
