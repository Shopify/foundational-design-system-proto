import type {NextApiRequest, NextApiResponse} from 'next';

interface Request extends NextApiRequest {
  query: {};
}

interface APIResponse {
  error: string;
}

export default function handler(req: Request, res: NextApiResponse) {
  const response: APIResponse = {
    error: 'API endpoint not found',
  };

  res.status(404).json(response);
}
