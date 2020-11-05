import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import { get } from 'config'
import { router } from './modules/router'
import { applyOrmMiddlewares } from './modules/orm'

const PORT: number = get('port')
const app = new Koa()

app.use(json())
app.use(logger())
app.use(bodyParser())
applyOrmMiddlewares(app)
app.use(router.routes())

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})

