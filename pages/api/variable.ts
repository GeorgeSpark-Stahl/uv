import { NextApiRequest, NextApiResponse } from 'next'

let variable: string = 'initial';

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.status(200).send(variable)
      break
    case 'PUT':
      variable = req.body;
      res.status(200).send(variable)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}