import defaultConfig from './base'
import * as GlobalTypes from '../common/globalTypes'

const debug: GlobalTypes.ConfigType = {
  ...defaultConfig,
  logger: {
    level: GlobalTypes.LoggerLevel.DEBUG,
  },
  port: process.env.PORT || 8001,
}

export default debug
