import type {NextApiRequest, NextApiResponse} from 'next';

interface Request extends NextApiRequest {
  query: {};
}

interface APIResponse {
  message: string;
}

export default function handler(req: Request, res: NextApiResponse) {
  const response: APIResponse = {
    message: 'To access our tokens, visit: /api/beta/tokens',
  };

  res.status(200).json(response);
}
