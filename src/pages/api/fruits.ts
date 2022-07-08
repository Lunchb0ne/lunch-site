// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  res.status(200).json({
    apple: '🍎',
    orange: '🍊',
    banana: '🍌',
    melon: '🍈',
    watermelon: '🍉',
  });
};

export default handler;
