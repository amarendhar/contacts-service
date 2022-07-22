import { Router, Request, Response, IRouter } from 'express'
import { getHomePageHTML } from '../common/helpers/htmlUI'
import * as GlobalTypes from '../common/globalTypes'

const commonRoutes: IRouter = Router()

commonRoutes.get('/', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html')
  res.send(getHomePageHTML())
})

commonRoutes.get('/health', (req: Request, res: Response) => {
  res.status(GlobalTypes.STATUS_CODES.SUCCESS).json({ status: 1 })
})

commonRoutes.get('/test', (req: Request, res: Response) => {
  res.send('Yay!! test service is working')
})

export default commonRoutes
