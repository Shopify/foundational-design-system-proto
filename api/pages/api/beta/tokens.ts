import type {NextApiRequest, NextApiResponse} from 'next';
import {
  createPlatformTokens,
  getAllTokens,
} from '../../../../packages/functions';
import {Tokens, TokenPlatform} from '../../../../packages/functions/types';

type SupportedPlatform = Exclude<TokenPlatform, 'figma'> | 'json';

export const SUPPORTED_PLATFORMS: SupportedPlatform[] = ['json', 'css', 'sass'];

export const DEFAULT_PLATFORM: SupportedPlatform = 'json';

export function isSupportedPlatform(
  platform?: string,
): platform is SupportedPlatform {
  return (
    !!platform && SUPPORTED_PLATFORMS.includes(platform as SupportedPlatform)
  );
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
  const platform = isSupportedPlatform(req.query.platform)
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
    case 'css':
    case 'sass':
      res.status(200).send(
        createPlatformTokens({
          platform,
          tokens: response.tokens,
        }),
      );
      break;

    default:
      res.status(200).json(response);
  }
}
