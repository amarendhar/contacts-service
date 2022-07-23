import chalk from 'chalk'
import mongoose from 'mongoose'
import config from '../config'
import logger from '../common/utils/logger'

const mongoConnection = async () => {
  try {
    logger.info({
      message: `MongoDb connection in progress...`,
    })

    await mongoose.connect(`${config.db.host}/${config.db.name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    const collections = await mongoose.connection.db.listCollections().toArray()

    logger.info({
      message: `MongoDb connected successfully`,
      data: {
        collections,
      },
    })
  } catch (error) {
    logger.error(chalk.red('Error in mongoClient at connectDB -> '), error)
  }

  mongoose.connection.on('error', (error) => {
    logger.error(
      chalk.red('Error in mongoClient at connectDB at error-callback -> '),
      error,
    )
  })
}

mongoConnection()

export default mongoose
