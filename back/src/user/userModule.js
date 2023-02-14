const { sequelize:{models:{User}}} = require('../../models')


const UserRepository = require('./userRepository')
const UserService = require('./userService')
const UserController = require('./userController')
const JWT = require('../../lib/jwt')
const crypto = require('crypto')
const jwt = new JWT({crypto})



const userRepository = new UserRepository({User})
const userService = new UserService({userRepository, jwt})
const userController = new UserController({userService})

module.exports = {
  userController
}