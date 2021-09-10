import type {NextApiRequest, NextApiResponse} from 'next';
import {
  getBreakpointTokens,
  getColorTokens,
  getMotionTokens,
  getSpacingTokens,
  formatTokens,
} from '../../../packages/functions';
import {TokenList} from '../../../packages/functions/types';

export const ALLOWED_ENDPOINTS = ['tokens.json', 'tokens.css', 'tokens.sass'];

interface Request extends NextApiRequest {
  query: {
    endpoint: string;
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
  const endpointIsAllowed = !!ALLOWED_ENDPOINTS.find(
    (endpoint) => endpoint === req.query.endpoint,
  );

  if (!endpointIsAllowed) {
    res.status(404).end('Not found');
  }

  // This would allow any "lever" to be customized through
  // GET parameters. This would enable folks to create unique
  // link to their specific Polaris configuration.
  const levers = {
    multiple: req.query.multiple ? Number(req.query.multiple) : 1,
  };

  // TODO: validate inputs

  const tokens: TokenList = {
    ...getColorTokens(),
    ...getSpacingTokens({multiple: levers.multiple}),
    ...getMotionTokens(),
    ...getBreakpointTokens(),
  };

  const response: APIResponse = {
    meta: {
      levers,
    },
    tokens,
  };

  const extension = req.query.endpoint.split('.')[1];
  switch (extension) {
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
