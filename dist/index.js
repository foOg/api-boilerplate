"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const config_1 = require("config");
const router_1 = require("./modules/router");
const orm_1 = require("./modules/orm");
const PORT = config_1.get('port');
const app = new koa_1.default();
app.use(koa_json_1.default());
app.use(koa_logger_1.default());
app.use(koa_bodyparser_1.default());
orm_1.applyOrmMiddlewares(app);
app.use(router_1.router.routes());
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
