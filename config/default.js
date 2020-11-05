// Try to limit to one level of depth

module.exports = {
  port: process.env.APP_PORT,
  appUrl: process.env.APP_URL,
  baseUrl: process.env.APP_BASE_URL || '/api',
  cors: process.env.CORS,
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB_NAME,
  },
}
