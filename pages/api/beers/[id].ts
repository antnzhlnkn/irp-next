import { NextApiRequest, NextApiResponse } from 'next'
import {sampleFetchWrapper} from "../../../utils/sample-api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {id} = req.query;
    const data = await sampleFetchWrapper(
        `https://api.punkapi.com/v2/beers/${id}`
    );

    if (!data) {
      throw new Error('Cannot find beer')
    }

    res.status(200).json(data)
  } catch (err) {
    res.status(404).json({statusCode: 404, message: err.message})
  }
}
