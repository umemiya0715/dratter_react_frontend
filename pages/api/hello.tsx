import {NextApiRequest, NextApiResponse} from "next";

const resStatus = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

export default resStatus;