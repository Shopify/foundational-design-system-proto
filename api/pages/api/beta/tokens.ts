import type {NextApiRequest, NextApiResponse} from 'next';
import {formatTokens, getAllTokens} from '../../../../packages/functions';
import {Tokens, TokenFormat} from '../../../../packages/functions/types';

type SupportedFormat = TokenFormat | 'json';

export const SUPPORTED_FORMATS: SupportedFormat[] = ['json', 'css', 'sass'];

export const DEFAULT_FORMAT: SupportedFormat = 'json';

export function isSupportedFormat(format?: string): format is SupportedFormat {
  return !!format && SUPPORTED_FORMATS.includes(format as SupportedFormat);
}

export interface Request extends NextApiRequest {
  query: {
    format?: string;
  };
}

export default function handler(req: Request, res: NextApiResponse) {
  const format = isSupportedFormat(req.query.format)
    ? req.query.format
    : DEFAULT_FORMAT;

  const tokens: Tokens = getAllTokens();

  switch (format) {
    case 'css':
    case 'sass':
      res.status(200).send(
        formatTokens({
          format,
          tokens,
        }),
      );
      break;

    default:
      res.status(200).json(tokens);
  }
}
