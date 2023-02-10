require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3000',
  db: {
    development: {
      database:process.env.DB_DATABASE || 'project',
      username:process.env.DB_USER || 'jung',
      password:process.env.DB_PASSWORD || 'jung',
      port:process.env.DB_PORT || '3306',
      host:process.env.DB_HOST || '127.0.0.1',
      dialect:'mysql',
      define: {
        freezeTableName: true,
        timestamp: false,
      }
    }
  }
}

module.exports = config

