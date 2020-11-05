"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
exports.router = new koa_router_1.default();
// EXAMPLE
// router.get('/get/url', async (ctx, next) => {
//   const { id } = ctx.params
//   ctx.body = {
//     contract: _contract
//   }
//   await next()
// })
