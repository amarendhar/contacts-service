import * as GlobalTypes from '../common/globalTypes'

const base: GlobalTypes.ConfigType = {
  port: process.env.PORT || 8000,
  logger: {
    level: GlobalTypes.LoggerLevel.INFO,
  },
}

export default base
