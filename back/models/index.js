const fs = require('fs')
const path = require('path')

const env = process.env.NODE_ENV || 'development'
const config = require('../config')['db'][env]
console.log(config)
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, config)

// console.log(fs.readdirSync(__dirname).filter(file => file.indexOf('Model') !== -1))
fs.readdirSync(__dirname)
  .filter(file => file.indexOf('Model') !== -1)
  .forEach(file => {
    require(path.join(__dirname, file))(sequelize, Sequelize)
})

const { models } = sequelize
for(const key in models){
  if(typeof models[key].associate !== 'function') continue
  models[key].associate(models)
}

console.log(sequelize)

