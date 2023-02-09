require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    development: {
      database:'',
      username:'',
      password:'',
      port:'',
      host:'',
      dialect:'mysql',
      define: {
        freezeTableName: true,
        timestamp: false,
      }
    }
  }
}

module.exports = config