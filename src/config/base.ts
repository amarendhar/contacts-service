import * as GlobalTypes from '../common/globalTypes'

const base: GlobalTypes.ConfigType = {
  port: process.env.PORT || 8000,
  logger: {
    level: GlobalTypes.LoggerLevel.INFO,
  },
  db: {
    host: process.env.DATABASE_HOST || 'mongodb://localhost:27018',
    name: process.env.DATABASE_NAME || 'contacts-database',
  }
}

export default base
