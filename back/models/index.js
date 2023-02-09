const fs = require('fs')
const path = require('path')

const env = process.env.NODE_ENV || 'development'
const config = require('../config')['db'][env]
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, config)

console.log(sequelize)

