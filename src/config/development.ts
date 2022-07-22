import defaultConfig from './base'
import * as GlobalTypes from '../common/globalTypes'

const development: GlobalTypes.ConfigType = {
  ...defaultConfig,
  logger: {
    level: GlobalTypes.LoggerLevel.INFO,
  },
  port: process.env.PORT || 8001,
}

export default development
