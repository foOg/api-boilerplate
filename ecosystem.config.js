module.exports = {
  apps: [
    {
      name: "boilerplate",
      script: "rm -rf ./dist/* && npx tsc --pretty && node --trace-warnings --inspect=9230 --enable-source-maps --no-lazy -r dotenv/config ./dist/index.js",
      instances: 1,
      autorestart: false,
      watch: true,
      ignore_watch: ['./dist', './ci', './tests'],
      error_file: '~/.pm2/logs/api.log',
      out_file: '~/.pm2/logs/api.log',
      env: {
        NODE_ENV: 'development',
        APP_PORT: 3000,
      },
    }
  ]
}