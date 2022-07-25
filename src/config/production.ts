import * as GlobalTypes from '../common/globalTypes'

const production: GlobalTypes.ConfigType = {
  port: process.env.PORT || 8000,
  logger: {
    level: GlobalTypes.LoggerLevel.INFO,
  },
  // Change values to production-version values if they are ready.
  db: {
    host: process.env.DATABASE_HOST || 'mongodb://localhost:27017',
    name: process.env.DATABASE_NAME || 'contacts-database',
  }
}

export default production
