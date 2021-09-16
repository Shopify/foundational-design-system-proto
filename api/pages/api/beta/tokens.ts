import type {NextApiRequest, NextApiResponse} from 'next';
import {
  createPlatformTokens,
  getAllTokens,
} from '../../../../packages/functions';
import {Tokens} from '../../../../packages/functions/types';

// SUGGESTION: This (and types) would be helpful to expose from the @polaris/tokens
export const SUPPORTED_PLATFORMS = ['json', 'css', 'sass'] as const;

export type Platform = typeof SUPPORTED_PLATFORMS[number];

export const DEFAULT_PLATFORM: Platform = 'json';

export function isValidPlatform(platform?: string): platform is Platform {
  return !!platform && SUPPORTED_PLATFORMS.includes(platform as Platform);
}

export interface Request extends NextApiRequest {
  query: {
    platform?: string;
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
  const platform = isValidPlatform(req.query.platform)
    ? req.query.platform
    : DEFAULT_PLATFORM;

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

  switch (platform) {
    case 'sass':
      res.status(200).send(
        createPlatformTokens({
          platform: 'sass',
          tokens: response.tokens,
        }),
      );
      break;

    case 'css':
      res.status(200).send(
        createPlatformTokens({
          platform: 'css',
          tokens: response.tokens,
        }),
      );
      break;

    default:
      res.status(200).json(response);
  }
}
