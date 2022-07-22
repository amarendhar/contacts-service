import * as GlobalTypes from '../common/globalTypes'

const production: GlobalTypes.ConfigType = {
  port: process.env.PORT || 8000,
  logger: {
    level: GlobalTypes.LoggerLevel.INFO,
  },
}

export default production
