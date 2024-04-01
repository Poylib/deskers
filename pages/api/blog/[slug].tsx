import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const blogBySlug: Record<
    string,
    {
      title: string;
      content: string;
    }
  > = {
    'what-is-deskers': {
      title: '데스커란?',
      content: '데스커란...',
    },
  };

  const { slug } = req.query;
  if (req.method === 'GET') {
    // GET 요청 처리 로직
    res.status(200).json(blogBySlug[String(slug)]);
  } else {
    // 그 외 요청에 대한 처리
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
