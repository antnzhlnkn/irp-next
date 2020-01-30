import { NextApiRequest, NextApiResponse } from 'next'
import {sampleFetchWrapper} from "../../../utils/sample-api";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await sampleFetchWrapper(
        `https://api.punkapi.com/v2/beers`
    );
    if (!Array.isArray(data)) {
      throw new Error('Cannot find beer data')
    }

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({statusCode: 500, message: err.message})
  }
}
