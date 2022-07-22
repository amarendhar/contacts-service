import express, { Application } from 'express'
import cors from 'cors'
import commonRoutes from './routes'
import { errorHandler, notFoundHandler } from './middlewares'
import logger from './common/utils/logger'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/**
 * Use cors for local-development to avoid allow-access-control-origin-errors.
 * Assuming frontend-app would be running on port 3000.
 */
const whiteList = ['http://localhost:3000']
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    const isOriginWhiteListed = whiteList.join(',').includes(String(origin))
    callback(null, isOriginWhiteListed)
  },
}
app.use(cors(corsOptions))

// Routes
app.use(commonRoutes)

// Error Handlers
app.use(errorHandler)
app.use(notFoundHandler)
process.on('unhandledRejection', (reason: string) => {
  // I just caught an unhandled promise rejection.
  throw new Error(reason)
})

process.on('uncaughtException', (error: Error) => {
  // I just received an error that was never handled, time to handle it & then decide whether a restart is needed.
  logger.error('uncaughtException -> ', error)
})

export default app
