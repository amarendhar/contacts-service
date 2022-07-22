/**
 * Note: enums should be in all capital-letters.
 */
export type ErrorType = {
  statusCode?: number
  message?: string
}

export type ErrorResponse = {
  error: ErrorType
  message: string
  data: null
}

export enum STATUS_CODES {
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SUCCESS = 200,
  ERROR = 500,
}

export enum LoggerLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  SILLY = 'silly',
  EMERG = 'emerg',
  ALERT = 'alert',
  CRIT = 'crit',
  NOTICE = 'notice',
}

export type Logger = {
  level: LoggerLevel
}

export type ConfigType = {
  port?: number | string
  logger: Logger
}

export enum NODE_ENV {
  BASE = 'base',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  DEBUG = 'debug',
}

export type ConfigTypes = Record<
  | NODE_ENV.BASE
  | NODE_ENV.DEVELOPMENT
  | NODE_ENV.PRODUCTION
  | NODE_ENV.DEBUG,
  ConfigType
>
