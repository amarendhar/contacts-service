import { Router, Request, Response, IRouter } from 'express'

const routes: IRouter = Router()

routes.get('/', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html')
  res.send("test")
})


export default routes
