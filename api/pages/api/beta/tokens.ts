import type {NextApiRequest, NextApiResponse} from 'next';
import {formatTokens, getAllTokens} from '../../../../packages/functions';
import {Tokens} from '../../../../packages/functions/types';

// SUGGESTION: This (and types) would be helpful to expose from the @polaris/tokens
export const FORMATS = ['json', 'css', 'sass'] as const;

export type Format = typeof FORMATS[number];

export const DEFAULT_FORMAT: Format = 'json';

export function isValidFormat(format?: string): format is Format {
  return !!format && FORMATS.includes(format as Format);
}

export interface Request extends NextApiRequest {
  query: {
    format?: string;
    multiple?: string;
  };
}

interface APIResponse {
  meta: {
    levers: {
      [key: string]: any;
    };
  };
  tokens: Tokens;
}

export default function handler(req: Request, res: NextApiResponse) {
  const format = isValidFormat(req.query.format)
    ? req.query.format
    : DEFAULT_FORMAT;

  // This would allow any "lever" to be customized through
  // GET parameters. This would enable folks to create unique
  // link to their specific Polaris configuration.
  const levers = {
    multiple: req.query.multiple ? Number(req.query.multiple) : 1,
  };

  // TODO: validate inputs

  const tokens: Tokens = getAllTokens();

  const response: APIResponse = {
    meta: {
      levers,
    },
    tokens,
  };

  switch (format) {
    case 'sass':
      res.status(200).send(
        formatTokens({
          format: 'sass',
          tokens: response.tokens,
        }),
      );
      break;

    case 'css':
      res.status(200).send(
        formatTokens({
          format: 'css',
          tokens: response.tokens,
        }),
      );
      break;

    default:
      res.status(200).json(response);
  }
}
