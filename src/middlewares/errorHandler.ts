import { Request, Response, NextFunction } from 'express'
import * as GlobalTypes from '../common/globalTypes'
import logger from '../common/utils/logger'

const errorHandler = (
  error: GlobalTypes.ErrorType,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  logger.error('error -> ', error)

  if (res.headersSent) {
    return next(error)
  }

  const status =
    error.statusCode || GlobalTypes.STATUS_CODES.INTERNAL_SERVER_ERROR
  const message = error.message || 'Internal Server Error'
  const result: GlobalTypes.ErrorResponse = {
    error,
    message,
    data: null,
  }

  res.status(status).json(result)
}

export default errorHandler
