"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyOrmMiddlewares = void 0;
const core_1 = require("@mikro-orm/core");
const ormPromise = core_1.MikroORM.init();
function applyOrmMiddlewares(app) {
    app.use(async (ctx, next) => {
        ctx.orm = await ormPromise;
        return core_1.RequestContext.createAsync(ctx.orm.em, next);
    });
}
exports.applyOrmMiddlewares = applyOrmMiddlewares;
