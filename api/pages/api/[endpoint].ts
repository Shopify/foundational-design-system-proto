import type {NextApiRequest, NextApiResponse} from 'next';
import {
  getreakpointTokens,
  getColorTokens,
  getMotionTokens,
  getSpacingTokens,
  formatTokens,
} from '../../../packages/functions';
import {TokenList} from '../../../packages/functions/types';

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

const allowedEndpoints = ['tokens.json', 'tokens.css', 'tokens.sass'];

export default function handler(req: Request, res: NextApiResponse) {
  const endpointIsAllowed = !!allowedEndpoints.find(
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
    ...getreakpointTokens(),
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
