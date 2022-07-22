import chalk from 'chalk'
import app from './app'
import config from './config'
import logger from './common/utils/logger'

const port = config.port

app.listen(port, () => {
  logger.info(chalk.bgBlueBright(`NodeJS Server listening on port ${port}\n`))
})
