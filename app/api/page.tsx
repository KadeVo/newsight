import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'This is the /pages route.' })
}

export default handler
