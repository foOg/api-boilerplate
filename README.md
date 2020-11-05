# Boilerplate
A boilerplate for web api written in typescript

### Stack
- Typescript
- MikroORM
- Koa

### Usage
- `yarn`: Build the package and dependencies
- `yarn up`: Start env including local Postgres and api using pm2 and docker
- `yarn down`: Shutdown and clean everything
- `yarn reset-database`: Restart migration from MikroORM
- `yarn test`: Run test using jest (none)
