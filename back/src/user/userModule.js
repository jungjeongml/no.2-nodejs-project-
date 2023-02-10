const { sequelize:{models:{User}}} = require('../../models')


const UserRepository = require('./userRepository')
const UserService = require('./userService')
const UserController = require('./userController')
const jwt = require('jsonwebtoken')

const userRepository = new UserRepository({User})
const userService = new UserService({userRepository, jwt})
const userController = new UserController({userService})

module.exports = {
  userController
}