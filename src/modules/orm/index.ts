import Koa from 'koa'
import { MikroORM, RequestContext } from '@mikro-orm/core'

declare module 'koa' {
  interface BaseContext {
    orm: MikroORM
  }
}

const ormPromise = MikroORM.init()

export function applyOrmMiddlewares(app: Koa) {
  app.use(async (ctx, next) => {
    ctx.orm = await ormPromise
    return RequestContext.createAsync(ctx.orm.em, next)
  })
}
