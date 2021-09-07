import type {NextApiRequest, NextApiResponse} from 'next';
import {
  createColorTokens,
  createMotionTokens,
  createSpacingTokens,
} from '../../../packages/functions';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const levers = {
    multiple: req.query.multiple ? Number(req.query.multiple) : 1,
  };

  const tokens = {
    ...createColorTokens({successHue: 0, warningHue: 100}),
    ...createSpacingTokens({multiple: levers.multiple || 1}),
    ...createMotionTokens(),
  };

  res.status(200).json(tokens);
}
