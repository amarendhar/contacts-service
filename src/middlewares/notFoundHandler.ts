import { Request, Response } from 'express'
import * as GlobalTypes from '../common/globalTypes'

const notFoundHandler = (req: Request, res: Response): void => {
  res
    .status(GlobalTypes.STATUS_CODES.NOT_FOUND)
    .send({ error: true, message: 'Endpoint Not Found', data: null })
}

export default notFoundHandler
