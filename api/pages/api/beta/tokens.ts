import type {NextApiRequest, NextApiResponse} from 'next';
import {formatTokens, getAllTokens} from '../../../../packages/functions';
import {TokenList} from '../../../../packages/functions/types';

export const ALLOWED_FORMATS = ['json', 'css', 'sass'];
export const DEFAULT_FORMAT = 'json';

interface Request extends NextApiRequest {
  query: {
    format?: string;
    multiple: string;
  };
}

interface APIResponse {
  meta: {
    levers: {
      [key: string]: any;
    };
  };
  tokens: TokenList;
}

export default function handler(req: Request, res: NextApiResponse) {
  let format = DEFAULT_FORMAT;
  const requestedFormat = req.query.format;
  if (requestedFormat && ALLOWED_FORMATS.includes(requestedFormat)) {
    format = requestedFormat;
  }

  // This would allow any "lever" to be customized through
  // GET parameters. This would enable folks to create unique
  // link to their specific Polaris configuration.
  const levers = {
    multiple: req.query.multiple ? Number(req.query.multiple) : 1,
  };

  // TODO: validate inputs

  const tokens: TokenList = getAllTokens();

  const response: APIResponse = {
    meta: {
      levers,
    },
    tokens,
  };

  switch (format) {
    case 'sass':
      res.status(200).send(formatTokens(response.tokens, 'sass'));
      break;

    case 'css':
      res.status(200).send(formatTokens(response.tokens, 'css'));
      break;

    default:
      res.status(200).json(response);
  }
}
